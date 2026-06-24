'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('bill_details', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            bill_id: {
                type: Sequelize.INTEGER,
                references: { model: { tableName: "bills" }, key: "id" }
            },
            menu_item_id: {
                type: Sequelize.INTEGER,
                references: { model: { tableName: "menu_items" }, key: "id" }
            },
            quantity: {
                type: Sequelize.INTEGER
            },
            price: {
                type: Sequelize.DOUBLE
            },
            discount_percentage: {
                type: Sequelize.INTEGER
            },
            discount: {
                type: Sequelize.DOUBLE
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            deleted_at: {
                allowNull: true,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('bill_details');
    }
};
