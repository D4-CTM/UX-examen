'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Bill extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            models.Bill.hasMany(models.BillDetail, {
                foreignKey: 'id',
                otherKey: 'bill_detail_id',
                as: 'details'
            });
        }
    }
    Bill.init({
        id: {
            primaryKey: true,
            autoIncrementIdentity: true,
            type: DataTypes.INTEGER,
        },
        paymentType: DataTypes.INTEGER,
        deliveryType: DataTypes.INTEGER,
        subtotal: DataTypes.DOUBLE,
        discount: DataTypes.DOUBLE,
        total: DataTypes.DOUBLE
    }, {
        sequelize,
        paranoid: true,
        underscored: true,
        modelName: 'Bill',
    });
    return Bill;
};
