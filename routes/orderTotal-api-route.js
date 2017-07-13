var db = require("../models");

module.exports = function (app) {
    // Find all orders and return them to the user with res.json
    app.get("/api/order", function (req, res) {
        db.Order.findAll({}).then(function (dbOrder) {
            res.json(dbOrder);
        });
    });

};