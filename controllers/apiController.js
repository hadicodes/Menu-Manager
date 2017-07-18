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
    }).then(menuItems => {
        res.json(menuItems);
    });
};