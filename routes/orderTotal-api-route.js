var db = require("../models");

module.exports = function (router) {
    // Find all orders and return them to the user with res.json
    router.get("/api/order", function (req, res) {
        db.Order.findAll({}).then(function (dbOrder) {
            res.json(dbOrder);
            <script src="/reload/reload.js"></script>
        });
    });
};

module.exports = router;