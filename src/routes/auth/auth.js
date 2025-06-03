const {register, check_account_mail, get_mail_account } = require('./../users/users.query');

module.exports = function(app, bcrypt) {
    app.post('/login', (req, res) => {
        const mail = req.body.email;
        const pwd = req.body.password;

        if (!mail || !pwd) {
            return res.status(400).json({ msg: 'Internal server error' });
        }
        get_mail_account(res, mail, pwd, bcrypt, function(code) {
            if (code === 84) {
                return res.status(401).json({ msg: 'Invalid Credentials' });
            }
        });
    });
    app.post('/register', (req, res) => {
        const mail = req.body.email;
        const uname = req.body.username;
        let pwd = req.body.password;

        if (!mail || !uname || !pwd) {
            return res.status(400).json({ msg: 'Internal server error' });
        }
        pwd = bcrypt.hashSync(pwd, 10);
        check_account_mail(res, mail, function(code) {
            if (code === 84) {
                return res.status(409).json({ msg: 'Account already exists' });
            } else {
                register(res, mail, pwd, uname);
            }
        });
    });
};
