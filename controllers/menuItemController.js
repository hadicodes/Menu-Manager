// Dependencies
const db = require('../models');

var exports = module.exports = {};

//======================================
// Get Menu Controller
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
            menuItems: menuItems
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

//======================================/
// Order Checkout Route
//======================================
// Retrieves all added menu items for an order from db
exports.renderOrder = function (req, res) {
    db.MenuItem.findAll({}).then(menuItems => {
        res.render("order", {
            menuItems: menuItems
        });
    });
};


//======================================
// Delete Items Controller
//======================================
//Deletes a menu item from  db
exports.deleteMenuItem = function (req, res) {
    var condtion = req.params.id;
    db.MenuItem.destroy({
            where: {
                id: condtion
            }
        })
        .then(function (data) {
            res.redirect('/menu');
        });
};

//======================================
// Update Items Controller
//======================================
//Updates a menu item to db
exports.updateMenuItem = function (req, res) {
    var condtion = req.params.id;
    db.MenuItem.update({})
        .then(function () {
            res.redirect("/menu");
        });
};