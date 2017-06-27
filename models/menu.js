module.exports = function (sequelize, DataTypes) {
    const Menu = sequelize.define('Menu', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
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
                Menu.belongsToMany(models.MenuItem, {
                    through: 'MenuSelection'
                });
            }
        }
    });

    return Menu;
};