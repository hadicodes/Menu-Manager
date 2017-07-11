// OrderedMenuItem is the model for the join table between Menu and MenuItem

module.exports = function (sequelize, DataTypes) {
    const OrderedMenuItem = sequelize.define('OrderedMenuItem', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        },
    }, {
        classMethods: {
            associate: function (models) {
                OrderedMenuItem.belongsToMany(models.MenuItem);
                OrderedMenuItem.belongsToMany(models.Order);

            }
        }
    });

    return OrderedMenuItem;
};