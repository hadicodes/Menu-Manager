// Dependencies
const express = require('express');
const router = express.Router();

const menuItemController = require('../controllers/menuItemController.js');

// Retrieves all menu items from db, groups by category.
router.get('/menu', menuItemController.getMenu);

router.get('/menu/add', menuItemController.renderAddMenuItemPage);

router.post("/menu/add", menuItemController.createMenuItem);

router.get('/order', menuItemController.renderOrder);

router.delete("/menu/:id", menuItemController.deleteMenuItem);

router.put("/menu/:id", menuItemController.updateMenuItem);

module.exports = router;