module.exports = function (sequelize, DataTypes) {
    const MenuItem = sequelize.define('MenuItem', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    }, {
        timestamps: true,
        createdAt: true
    },
    {
        classMethods: {
            associate: function(models) {
                MenuItem.belongsToMany(models.Menu, { through: 'MenuSelection' });

            }
        }
    });

    return MenuItem;
};