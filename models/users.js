//// Import Sequelize library
module.exports = function (sequelize, DataTypes) {

    // Creates user model with column names id, user_name, devoured, and with a timestamp
    var user = sequelize.define("user", {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        user_name: {
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
    return user;
};