//// Import Sequelize library
module.exports = function (sequelize, DataTypes) {

    // Creates item model 
    var meal = sequelize.define("meal", {
        meal_id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        meal_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        meal_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        meal_category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        meal_price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    }, {
        timestamps: true,
        createdAt: true
    });

// returns the model we just defined
return meal;
};