'use strict';

/** @type {import('sequelize-cli').Migration} */
exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('students', {
      id: {
        type: Sequelize.INTEGER(6),
        allowNull: false,
        primaryKey: true
      },

      name: Sequelize.STRING(100),
      age: Sequelize.INTEGER,
      classes: Sequelize.INTEGER,
      courses: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE 
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('students')
  }
};
