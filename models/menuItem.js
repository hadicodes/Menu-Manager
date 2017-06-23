//// Import Sequelize library
module.exports = function (sequelize, DataTypes) {

    // Creates menu model 
    var menu = sequelize.define("menu", {
        menu_id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        menu_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        
    }, );

    // returns the model we just defined
    return menu;
};