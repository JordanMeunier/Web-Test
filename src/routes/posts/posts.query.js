const db = require('../../config/db');

exports.get_posts = (user_id, cb) =>
  db.execute('SELECT * FROM post WHERE user_id = ?',
    [user_id],
    cb
  );

exports.create_post = (title, body, image_url, user_id, cb) =>
  db.execute(
    'INSERT INTO post (title, body, image_url, user_id) VALUES (?, ?, ?, ?)',
    [title, body, image_url, user_id],
    cb
  );

exports.updatePost = (id, title, body, image_url, user_id, cb) =>
  db.execute(
    'UPDATE post SET title = ?, body = ?, image_url = ? WHERE id = ? AND user_id = ?',
    [title, body, image_url, id, user_id],
    cb
  );

exports.deletePost = (id, cb) =>
  db.execute('DELETE FROM post WHERE id = ?',
    [id],
    cb
  );

exports.get_post_details = (post_id, cb) => {
  const postQuery = `
    SELECT post.id, post.title, post.body, post.image_url, user.id AS user_id, user.username FROM post JOIN user ON post.user_id = user.id WHERE post.id = ?`;

  db.execute(postQuery,
    [post_id],
    (err, postResults) => {
    if (err)
      return cb(err);
    if (postResults.length === 0)
      return cb(null, null);
    const post = postResults[0];
    const commentsQuery = `
      SELECT comment.id, comment.comment, comment.date, user.id AS user_id, user.username FROM comment JOIN user ON comment.user_id = user.id WHERE comment.post_id = ? ORDER BY comment.date ASC`;
    db.execute(commentsQuery,
      [post_id],
      (err, commentsResults) => {
      if (err)
        return cb(err);
      post.comments = commentsResults || [];
      cb(null, post);
    });
  });
};
