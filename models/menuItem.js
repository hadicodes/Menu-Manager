//// Import Sequelize library
module.exports = function (sequelize, DataTypes) {

    // Creates item model 
    var item = sequelize.define("item", {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    }, {
        timestamps: true,
        createdAt: true
    });

// returns the model we just defined
return item;
};