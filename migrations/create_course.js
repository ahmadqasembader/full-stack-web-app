'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('courses', {
      id: {
        type: Sequelize.INTEGER(6),
        allowNull: false,
        primaryKey: true
      },
      classroomCode: {
        type: Sequelize.INTEGER(6)
    },
      name: Sequelize.STRING(100),
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },
  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('courses');
  }
}
