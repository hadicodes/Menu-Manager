// Dependencies
const express = require('express');
const router = express.Router();

const db = require('../models');

// Routes
router.get('/', function(req, res) {
    res.send("Success");
});

// Export
module.exports = router;
