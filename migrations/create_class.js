'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('classes', {
      id: {
        type: Sequelize.INTEGER(6),
        allowNull: false,
        primaryKey: true
      },
      code: {
        type: Sequelize.INTEGER(6)
    },
      name: Sequelize.STRING(100),
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('classes')
  }
};
