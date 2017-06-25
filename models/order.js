//// Import Sequelize library
module.exports = function (sequelize, DataTypes) {

    // Creates order model
    // total
    // menu selections 
    var order = sequelize.define("order", {
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
    return order;
};