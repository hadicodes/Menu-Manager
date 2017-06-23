//// Import Sequelize library
module.exports = function (sequelize, DataTypes) {

    // Creates item model 
    var item = sequelize.define("item", {
        item_id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        item_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        item_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        item_category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        item_price: {
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