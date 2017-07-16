const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController.js');

const db = require('../models');

// app.get('/signin', authController.signin);
router.get('/signin', authController.signin);

module.exports = router;

