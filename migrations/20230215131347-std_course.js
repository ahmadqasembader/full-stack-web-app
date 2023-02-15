'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('std_courses', {
      std_id: {
        type: Sequelize.INTEGER(6),
        allowNull: false,
        primaryKey: true,
      },
      std_name: Sequelize.STRING,
      course_id: Sequelize.INTEGER
  
    })
  },

  async down(queryInterface, Sequelize) {

  }
};
