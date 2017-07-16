// Dependencies
const express = require('express');
const router = express.Router();

const db = require('../models');

// controller for the signin route
var exports = module.exports = {};

exports.signin = function(req, res) {
 
    res.render('signin');
 
}
