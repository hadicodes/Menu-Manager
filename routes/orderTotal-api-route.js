var db = require("../models");

module.exports = function (router) {
    // Find all orders and return them to the user with res.json
    router.get("/api/order", function (req, res) {
        db.Order.findAll({}).then(function (dbOrder) {
            res.json(dbOrder);
        });
    });
};

module.exports = router;