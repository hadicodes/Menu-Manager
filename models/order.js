//// Import Sequelize library
module.exports = function (sequelize, DataTypes) {

    // Creates order model 
    var order = sequelize.define("order", {
        order_id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        order_name: {
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
    return order;
};