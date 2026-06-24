'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class BillDetail extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            models.BillDetail.belongsTo(models.Bill, {
                foreignKey: 'id',
                otherKey: 'bill_detail_id',
                as: 'bill'
            });

            models.BillDetail.belongsTo(models.MenuItem, {
                foreignKey: 'id',
                otherKey: 'menu_item_id',
                as: 'item',
            });
        }
    }
    BillDetail.init({
        id: {
            primaryKey: true,
            autoIncrementIdentity: true,
            type: DataTypes.INTEGER,
        },
        quantity: DataTypes.INTEGER,
        price: DataTypes.DOUBLE,
        discountPercentage: DataTypes.INTEGER,
        discount: DataTypes.DOUBLE,
        menuItemId: DataTypes.INTEGER
    }, {
        sequelize,
        paranoid: true,
        underscored: true,
        modelName: 'BillDetail',
    });
    return BillDetail;
};
