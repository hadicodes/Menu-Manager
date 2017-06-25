// Dependencies
var express = require("express");
var router = express.Router();
// Import the model (user.js) to use its database functions.
var db = require("../models");


//Routing:  Creates all our routes below
// Grabs all users from the users database
router.get("/", function(req, res) {
    db.user.findAll({})
        .then(function(data) {
            var hbsObject = {
                users: data
            };
            res.render("index", hbsObject);
        });
});

//Posts a user to db
router.post("/", function(req, res) {
    db.user.create({ user_name: req.body.user_name })
        .then(function(data) {
            res.redirect("/#scroll-spot");
        });
});

////Put = Updates a user to db
router.put("/:id", function(req, res) {
    var condtion = req.params.id;
    db.user.update({
            devoured: true
        }, {
            where: {
                id: condtion
            }
        })
        .then(function() {
            res.redirect("/#scroll-spot");
        });
});



module.exports = router;
