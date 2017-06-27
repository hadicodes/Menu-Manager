// MenuSelection is the model for the join table between Menu and MenuItem

module.exports = function (sequelize, DataTypes) {
    const MenuSelection = sequelize.define('MenuSelection', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true
        }
    });

    return MenuSelection;
};