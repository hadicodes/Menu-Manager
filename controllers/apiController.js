var exports = module.exports = {};

const db = require('../models');

// ===============================================
// Menu Items 
// ================================================
exports.renderMenuItemsFromIds = function (req, res) {
    const menuItemIdsString = req.query.menuItemIds || "";
    const menuItemIds = menuItemIdsString.split(',');
    db.MenuItem.findAll({
        order: ['category'],
        where: {
            id: {
                $in: menuItemIds
            }
        }
    }).then(function(menuItems)  {
        res.json(menuItems);
    });
};

exports.renderOneMenuItem = function (req, res) {
    const menuItemId= req.query.menuItemId || "";
    db.MenuItem.find({
        where: {
            id: menuItemId
        }
    }).then(function(menuItem)  {
        res.json(menuItem);
    });

}