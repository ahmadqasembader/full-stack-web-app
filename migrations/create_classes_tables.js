'use strict';

/** @type {import('sequelize-cli').Migration} */
exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('classes', {
      id: {
        type: Sequelize.INTEGER(6),
        allowNull: false,
        primaryKey: true
      },
      classroomCode: {
        type: Sequelize.INTEGER(6)
      },
      name: Sequelize.STRING(100),
      students: Sequelize.INTEGER,
      courses: Sequelize.INTEGER,

      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE 
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('classes')
  }
};
