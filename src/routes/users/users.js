const user_query = require('./users.query');
const posts_query = require('../posts/posts.query');
const auth = require('../../middleware/auth');

module.exports = function(app) {
    app.get('/users', auth, (req, res) => {
        user_query.get_all_users(res);
    });
    app.get('/users/posts', auth, (req, res) => {
        posts_query.posts_user(req.user_info.email, res);
    });
    app.get('/users/:info', auth, (req, res) => {
        user_query.get_user_info(req.params.info, res);
    });
    app.delete('/users/:id', auth, (req, res) => {
        user_query.delete_user(res, req.params.id);
    });
    app.put('/users/:id', auth, (req, res) => {
        const { email, password, username } = req.body;
        const id = req.params.id;

        if (!email || !password || !username || !id)
            return res.status(500).json({ msg: 'Bad parameter' });
        user_query.update_user(email, password, username, id, res);
    });
};
