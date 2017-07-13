// Order is the model for the join table between Menu and MenuItem

module.exports = function (sequelize, DataTypes) {
    const Order = sequelize.define('Order', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        total: {
            type: DataTypes.FLOAT,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        }
    },{
        classMethods: {
            associate: function (models) {
                Order.belongsToMany(models.MenuItem, {
                    through: 'OrderedMenuItem'
                });

            }
        }
    });

    return Order;
};