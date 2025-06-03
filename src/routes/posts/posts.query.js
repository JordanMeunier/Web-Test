const db = require('../../config/db');

exports.get_posts = (user_id, cb) =>
  db.execute('SELECT * FROM post WHERE user_id = ?', [user_id], cb);

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
  db.execute('DELETE FROM post WHERE id = ?', [id], cb);
