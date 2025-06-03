const express = require('express');
const notFound = require('./middleware/notFound');
const app = express();
app.use(express.json());
app.use(notFound);
require('dotenv').config();
const user_routes = require('./routes/users/users');
const post_routes = require('./routes/posts/posts');
const auth_routes = require('./routes/auth/auth');
app.use('/users', user_routes);
app.use('/posts', post_routes);
auth_routes(app, require('bcryptjs'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
