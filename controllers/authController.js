// Dependencies
const express = require('express');
const router = express.Router();

const db = require('../models');
 
router.get('/signup', function(req, res) {

    res.render('signup');

});
 
// Export
module.exports = router;