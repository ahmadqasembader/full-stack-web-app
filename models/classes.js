import Sequelize from "sequelize";

export default Sequelize.define('classes', {
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
    courses: Sequelize.INTEGER
})