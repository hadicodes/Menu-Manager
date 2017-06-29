// Dependencies
const express = require('express');
const router = express.Router();

const db = require('../models');

// Routes
// ============================================
// Retrieves all menu items from db
router.get('/', function (req, res) {
    db.MenuItem.findAll({}).then(menuItems => {
        res.render("index", menuItems);
    });
});

//Posts a menu Item to db
router.post("/order", function (req, res) {
    db.MenuItem.create({
            itemName: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
        })
        .then(function (data) {
            res.redirect('/');
        });
});



//======================================// 
//======================================
//Routing -  Creates all our routes below
// Grabs all burgers from the burgers database
router.get("/", function (req, res) {
    db.MenuItem.findAll({})
        .then(function (data) {
            var hbsObject = {
                burgers: data
            };
            res.render("index", hbsObject);
        });
});


//Posts a menu Item to db
router.post("/order", function (req, res) {
    db.MenuItem.create({
            itemName: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
        })
        .then(function (data) {
            res.redirect('/');
        });
});


//Put = Updates a menu item to db
router.put("/:id", function (req, res) {
    var condtion = req.params.id;
    db.MenuItem.update({
            devoured: true
        }, {
            where: {
                id: condtion
            }
        })
        .then(function () {
            res.redirect("/#scroll-spot");
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
        .then(function () {
            res.redirect('/');
        });
});


// Export
module.exports = router;