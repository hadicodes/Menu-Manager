//// Import Sequelize library
module.exports = function (sequelize, DataTypes) {

    // Creates user model with column names id, user_name, devoured, and with a timestamp
    // incorporate passport
    var User = sequelize.define("user", {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        password: {
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

     User.associate = function(models) {
    User.hasMany(models.Task);
  }

    // returns the model we just defined
    return user;
};