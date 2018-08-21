const express = require('express');

// Express Router
const router = express.Router();

// @route  GET api/users/test
// @desc   Test users route
// @access Public

// Router GET request 
// /test is extension to URL already in server.js
router.get('/test', (req, res) => res.json({msg: 'Users work'}));

// Export
module.exports = router;