// Dependencies
const express = require('express');
const router = express.Router();

const db = require('../models');

// ===============================================
// Routes
// ================================================

// Retrieves all menu items from db, groups by category.
router.get('/menuItems/ids', (req, res) => {
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
});

// Export
module.exports = router;