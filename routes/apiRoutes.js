// Dependencies
const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController.js');

router.get('/menuItems/ids', apiController.renderMenuItemsFromIds);

router.get('/menuItem', apiController.renderOneMenuItem);

module.exports = router;