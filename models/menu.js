module.exports = function (sequelize, DataTypes) {
    const Menu = sequelize.define('Menu', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true

        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            // adds letter only vaidation
            validate: {
                is: ["^[a-z]+$", 'i']
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        }
    });

    return Menu;
};