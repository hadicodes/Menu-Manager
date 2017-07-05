// Dependencies
const express = require('express');
const router = express.Router();

const db = require('../models');


// ===============================================
// Routes
// ================================================

// Retrieves all menu items from db
router.get('/menu', (req, res) => {
    db.MenuItem.findAll({}).then(menuItems => {
        res.render("menu", {menuItems: menuItems});
    });
});

//Posts a menu Item to db
router.post("/menu/new", function (req, res) {
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





// Export
module.exports = router;