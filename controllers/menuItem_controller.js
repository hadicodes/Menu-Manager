// Dependencies
const express = require('express');
const router = express.Router();

const db = require('../models');

// Routing
router.get('/', function (req, res) {
    // retrieves all menu items
    db.MenuItem.findAll({}).then(menuItems => {
        res.render("index", menuItems);
    });
});

//Posts a menu Item to db
router.post("/order", function (req, res) {
    db.MenuItem.create({
            itemName: req.body.name
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
    db.burger.findAll({})
        .then(function (data) {
            var hbsObject = {
                burgers: data
            };
            res.render("index", hbsObject);
        });
});


//Posts a menu Item to db
router.post("/order", function (req, res) {
    db.burger.create({
            itemName: req.bodyname
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




// =====================================================
//Posts a burger to db
// router.post("/", function(req, res) {
//     db.burger.create({ burger_name: req.body.burger_name })
//         .then(function(data) {
//             res.redirect("/#scroll-spot");
//         });
// });

//Put = Updates a burger to db
router.put("/:id", function (req, res) {
    var condtion = req.params.id;
    db.burger.update({
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