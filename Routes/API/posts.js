const express = require('express');

// Express Router
const router = express.Router();

// @route  GET api/posts/test
// @desc   Test posts route
// @access Public

// Router GET request 
// /test is extension to URL already in server.js
router.get('/test', (req, res) => res.json({msg: 'Posts work'}));

// Export
module.exports = router;