module.exports = (req, res, next) => {
    const id = req.params.id;
    const db = require('../config/db');
  
    if (!id)
      return next();
    db.execute('SELECT * FROM `todo` WHERE id = ?', [id], (err, results) => {
      if (err)
        return res.status(500).json({ msg: 'internal server error' });
      if (results.length > 0) {
        next();
      } else {
        res.status(404).json({ msg: 'Not found' });
      }
    });
  };
  