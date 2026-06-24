'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class MenuItem extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            models.MenuItem.hasMany(models.BillDetail, {
                foreignKey: 'id',
                otherKey: 'menu_item_id',
                as: 'billDetails'
            })
        }
    }
    MenuItem.init({
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.DOUBLE
    }, {
        sequelize,
        paranoid: true,
        underscored: true,
        modelName: 'MenuItem',
    });
    return MenuItem;
};
