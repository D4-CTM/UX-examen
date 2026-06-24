'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('bills', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            payment_type: {
                type: Sequelize.INTEGER
            },
            delivery_type: {
                type: Sequelize.INTEGER
            },
            subtotal: {
                type: Sequelize.DOUBLE
            },
            discount: {
                type: Sequelize.DOUBLE
            },
            total: {
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
        await queryInterface.dropTable('bills');
    }
};
