// MenuSelection is the model for the join table between Menu and MenuItem

module.exports = function (sequelize, DataTypes) {
    const MenuSelection = sequelize.define('MenuSelection', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        },
    });

    return MenuSelection;
};