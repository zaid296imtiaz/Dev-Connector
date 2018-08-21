const express = require('express');

// Express Router
const router = express.Router();

// @route  GET api/profile/test
// @desc   Test profile route
// @access Public

// Router GET request 
// /test is extension to URL already in server.js
router.get('/test', (req, res) => res.json({msg: 'Profile work'}));

// Export
module.exports = router;