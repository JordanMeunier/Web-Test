const db = require('../../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.check_account_mail = function(res, mail, callback) {
    const normalizedMail = mail.toLowerCase().trim();
    db.query('SELECT * FROM user WHERE email = ?',
        [normalizedMail],
        function(err, results) {
        if (err) return res.status(500).json({ msg: 'Internal server error' });
        if (results.length > 0) {
            callback(84);
        } else {
            callback(0);
        }
    });
};

exports.get_mail_account = function(res, mail, pwd, bcrypt, callback) {
    db.query('SELECT id, password FROM user WHERE email = ?',
        [mail],
        function(err, results) {
        if (err)
            return res.status(500).json({ msg: 'Internal server error' });
        if (results.length === 0)
            return callback(84);
        const hash = results[0].password;
        const id = results[0].id;
        if (bcrypt.compareSync(pwd, hash)) {
            const token = jwt.sign({ email: mail, id }, 'SECRET');
            res.json({ token });
            return callback(0);
        } else {
            return callback(84);
        }
    });
};

exports.register = function(res, mail, pwd, uname) {
    db.query(
        'INSERT INTO user (username, password, email) VALUES (?, ?, ?)',
        [uname, pwd, mail],
        function(err) {
            if (err)
                return res.status(500).json({ msg: 'Internal server error' });
            const token = jwt.sign({ email: mail }, 'SECRET');
            res.status(201).json({ token });
        }
    );
};

exports.get_all_users = function(res) {
    db.query('SELECT * FROM user',
        function(err, users) {
        if (err) {
            return res.status(500).json({ msg: 'Internal server error' });
        } else if (users.length > 0) {
            return res.status(200).json(users);
        } else {
            return res.status(400).json({ msg: 'Not found' });
        }
    });
};

exports.get_user_info = function(info, res) {
    const isEmail = info.includes('@');
    const query = isEmail ? 'SELECT * FROM user WHERE email = ?' : 'SELECT * FROM user WHERE id = ?';
    
    db.query(query,
        [info],
        function(err, results) {
        if (err)
            return res.status(500).json({ msg: 'Internal server error' });
        if (results.length === 0)
            return res.status(404).json({ msg: 'User not found' });
        return res.status(200).json(results[0]);
    });
};

exports.update_user = function(email, password, username, id, res) {
    const hash = bcrypt.hashSync(password, 10);
    db.query('SELECT * FROM user WHERE id = ?',
        [id],
        function(err, results) {
        if (err)
            return res.status(500).json({ msg: 'Internal server error' });
        if (results.length === 0)
            return res.status(404).json({ msg: 'User not found' });

        db.query(
            'UPDATE user SET email = ?, password = ?, username = ? WHERE id = ?',
            [email, hash, username, id],
            function(err) {
                if (err) return res.status(500).json({ msg: 'Internal server error' });
                exports.get_user_info(id, res);
            }
        );
    });
};

exports.delete_user = function(res, id) {
    db.query('DELETE FROM user WHERE id = ?', [id], function(err, results) {
        if (err) {
            return res.status(500).json({ msg: 'Internal server error' });
        } else if (results.affectedRows >= 1) {
            return res.status(200).json({ msg: `Successfully deleted record number: ${id}` });
        } else {
            return res.status(400).json({ msg: 'Not found' });
        }
    });
};
