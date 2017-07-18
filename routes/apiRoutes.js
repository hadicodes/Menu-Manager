// Dependencies
const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController.js');

router.get('/menuItems/ids', apiController.renderMenuItemsFromIds);

module.exports = router;