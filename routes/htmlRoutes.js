// Dependencies
const express = require('express');
const router = express.Router();

const menuItemController = require('../controllers/menuItemController.js');

//======================================
// RESTFUL Routes
//======================================
// Lists all menu items from db, groups by category.
router.get('/menu', menuItemController.getMenu);

// Shows add new item form 
router.get('/menu/add', isLoggedIn, menuItemController.renderAddMenuItemPage);

// Creates a new added menu item and posts it to DB
router.post('/menu/add', isLoggedIn, menuItemController.createMenuItem);

// Shows Item and info about a user's order
router.get('/order', menuItemController.renderOrder);

router.delete('/menu/:id/', menuItemController.deleteMenuItem);

router.put('/menu/edit', menuItemController.updateMenuItem);

function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())

        return next();
        
    req.flash('error', 'You are not authorized to view this page.')

    res.redirect('/');

}

module.exports = router;