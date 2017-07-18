// Dependencies
const express = require('express');
const router = express.Router();

const menuItemController = require('../controllers/menuItemController.js');

// Retrieves all menu items from db, groups by category.
router.get('/menu', menuItemController.getMenu);

router.get('/menu/add', isLoggedIn, menuItemController.renderAddMenuItemPage);

router.post("/menu/add", isLoggedIn, menuItemController.createMenuItem);

router.get('/order', menuItemController.renderOrder);

router.delete("/menu/:id", menuItemController.deleteMenuItem);

router.put("/menu/:id", menuItemController.updateMenuItem);

function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())

        return next();
        
    req.flash('error', 'You are not authorized to view this page.')

    res.redirect('/');

}

module.exports = router;