const express = require('express');
const path = require('path');
const notFound = require('./middleware/notFound');
require('dotenv').config();

const app = express();

app.use(express.json());

const userRoutes = require('./routes/users/users');
const postRoutes = require('./routes/posts/posts');
const authRoutes = require('./routes/auth/auth');

app.use('/users', userRoutes);
app.use('/posts', postRoutes);
authRoutes(app, require('bcryptjs'));

const publicDir = path.join(__dirname, 'public');
app.use(express.static(publicDir));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.use(notFound);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
