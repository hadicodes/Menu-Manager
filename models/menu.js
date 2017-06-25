//// Import Sequelize library
module.exports = function (sequelize, DataTypes) {

    // Creates menu model 
    var menu = sequelize.define("menu", {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    }, {
        timestamps: true,
        createdAt: true
    });

// returns the model we just defined
return menu;
};