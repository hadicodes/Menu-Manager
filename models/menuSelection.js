//// Import Sequelize library
module.exports = function (sequelize, DataTypes) {

    // Creates item model 
    // menu id
    // menuitem id
    var item = sequelize.define("item", {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true
        }
    }, {
        timestamps: true,
        createdAt: true
    });

// returns the model we just defined
return item;
};