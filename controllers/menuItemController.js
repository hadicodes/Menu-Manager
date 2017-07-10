// Dependencies
const express = require('express');
const router = express.Router();

const db = require('../models');

// ===============================================
// Routes
// ================================================

// Retrieves all menu items from db
router.get('/menu', (req, res) => {
    db.MenuItem.findAll({
        order: ['category']
    }).then(menuItems => {
        res.render("menu", {
            menuItems: menuItems
        });
    });
});

//======================================/
// Add Items Route
//======================================
router.get('/menu/add', (req, res) => {
    db.MenuItem.findAll({
    }).then(menuItems => {
        res.render("add", {
            menuItems: menuItems
        });
    });
});

//Posts a menu Item to db
router.post("/menu/add", function (req, res) {
    db.MenuItem.create({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
        })
        .then(function (data) {
            res.redirect('/menu');
        });
});

//======================================/
// Order Checkout Route
//======================================
// Retrieves all added menu items for an order from db
router.get('/order', (req, res) => {
    db.MenuItem.findAll({}).then(menuItems => {
        res.render("order", {
            menuItems: menuItems
        });
    });
});

//Deletes a menu item from  db
router.delete("/:id", function (req, res) {
    var condtion = req.params.id;
    db.MenuItem.destroy({
            where: {
                id: condtion
            }
        })
        .then(function (data) {
            res.redirect('/');
        });
});

//Updates a menu item to db
router.put("/:id", function (req, res) {
    var condtion = req.params.id;
    db.MenuItem.update({})
        .then(function () {
            res.redirect("/");
        });
});

// Export
module.exports = router;