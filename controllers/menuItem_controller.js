// Dependencies
const express = require('express');
const router = express.Router();

const db = require('../models');

// Routes
router.get('/', function (req, res) {
    // find multiple entries
    db.MenuItem.findAll().then(menuItems => {
        res.render("index", menuItems);
    });
});

// Export
module.exports = router;