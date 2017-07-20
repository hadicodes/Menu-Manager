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

// Renders edit menu item form
router.get('/menu/edit', isLoggedIn, menuItemController.renderEditMenuItemPage);

// Edits a menu item and posts changes to db
router.put('/menu/edit/:id', isLoggedIn, menuItemController.updateMenuItem);


// passport function to check if user is logged in (admin)
function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())

        return next();
        
    req.flash('error', 'You are not authorized to view this page.')

    res.redirect('/');

}

module.exports = router;