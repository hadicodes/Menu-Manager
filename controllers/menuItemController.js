// Dependencies
const db = require('../models');

var exports = module.exports = {};

//======================================
// Get Menu Items Controller
//======================================
exports.getMenu = function (req, res) {
    db.MenuItem.findAll({
        order: ['category']
    }).then(menuItems => {
        res.render("menu", {
            menuItems: menuItems
        });
    });
};

//======================================
// Add Items Controller
//======================================
exports.renderAddMenuItemPage = function (req, res) {
    db.MenuItem.findAll({}).then(menuItems => {
        res.render("addMenuItem", {
            menuItems: menuItems,
            loggedin: true
        });
    });
};

//Posts a menu Item to db
exports.createMenuItem = function (req, res) {
    db.MenuItem.create({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
        })
        .then(function (data) {
            res.redirect('/menu');
        });
};

//======================================
// Edit Items Controller
//======================================
// Shows Edit Menu Items Page
exports.renderEditMenuItemPage = function (req, res) {
    db.MenuItem.findAll({}).then(function(menuItems) {
        res.render("editMenuItem", {
            menuItems: menuItems,
            loggedin: true
        });
    });
};

//Edits an existing menu Item
exports.updateMenuItem = function (req, res) {
    db.MenuItem.update({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function (data) {
            res.redirect('/menu/');
        });
};

//======================================/
// Order Checkout Route
//======================================
// Renders order template
exports.renderOrder = function (req, res) {
    res.render("order");
};