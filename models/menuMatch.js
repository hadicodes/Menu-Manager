module.exports = function (sequelize, DataTypes) {
    const MenuMatch = sequelize.define('MenuMatch', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        menuItemID: {
            type: DataTypes.INTEGER
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        }
    });

    return MenuMatch;
};