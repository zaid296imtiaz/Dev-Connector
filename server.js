const express = require('express');
const mongoose = require('mongoose');

const users = require('./Routes/API/users');
const profile = require('./Routes/API/profile');
const posts = require('./Routes/API/posts');

const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(db)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log((err)))

// Default GET request
app.get('/', (req, res) => res.send('Hello world'));

// Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));