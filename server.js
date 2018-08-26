const express = require("express");
const mongoose = require("mongoose");

const users = require("./Routes/API/users");
const profile = require("./Routes/API/profile");
const posts = require("./Routes/API/posts");

const bodyParser = require("body-parser");
const passport = require("passport");

const app = express();

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Default GET request
// app.get('/', (req, res) => res.send('Hello world'));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

// 'process.env.PORT' used for Hiroku deployment
const port = process.env.PORT || 5000;

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
