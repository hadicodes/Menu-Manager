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
        }
    }, 
    {
        classMethods: {
            associate: function(models) {
                Menu.belongsToMany(models.MenuItem, { through: 'MenuSelection' });
            }
        }
    });

    return Menu;
};