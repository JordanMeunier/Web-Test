const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const post = require('./posts.query');

router.get('/', auth, (req, res) => {
    post.get_posts(req.user.id, (err, results) => {
        if (err)
            return res.status(500).json({ msg: 'Internal server error' });
        res.json(results);
    });
});

router.get('/:id', auth, (req, res) => {
    post.get_post_details(req.params.id, (err, postDetails) => {
        if (err)
            return res.status(500).json({ msg: 'Internal server error' });
        if (!postDetails)
            return res.status(404).json({ msg: 'Post not found' });
        postDetails.user_link = `/user/${postDetails.user_id}`;
        postDetails.comments = postDetails.comments.map(comment => ({
            ...comment,
            user_link: `/user/${comment.user_id}`
        }));

        res.json(postDetails);
    });
});

router.post('/', auth, (req, res) => {
    const { title, body, image_url } = req.body;
    if (!title || !body || !image_url)
        return res.status(400).json({ msg: 'Bad parameter' });

    post.create_post(title, body, image_url, req.user.id, (err, result) => {
        if (err)
            return res.status(500).json({ msg: 'Internal server error' });

        res.status(201).json({
            id: result.insertId,
            title,
            body,
            image_url,
            user_id: req.user.id
        });
    });
});

router.put('/:id', auth, (req, res) => {
    const { title, body, image_url } = req.body;
    if (!title || !body || !image_url)
        return res.status(400).json({ msg: 'Bad parameter' });

    post.updatePost(req.params.id, title, body, image_url, req.user.id, (err, result) => {
        if (err)
            return res.status(500).json({ msg: 'Internal server error' });
        if (result.affectedRows === 0)
            return res.status(404).json({ msg: 'Not found' });

        res.json({
            id: parseInt(req.params.id),
            title,
            body,
            image_url,
            user_id: req.user.id
        });
    });
});

router.delete('/:id', auth, (req, res) => {
    post.deletePost(req.params.id, (err, result) => {
        if (err)
            return res.status(500).json({ msg: 'Internal server error' });
        if (result.affectedRows === 0)
            return res.status(404).json({ msg: 'Not found' });
        res.json({ msg: `Successfully deleted record number : ${req.params.id}` });
    });
});

module.exports = router;
