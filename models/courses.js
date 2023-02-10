import Sequelize from "sequelize";

export default Sequelize.define('courses', {
    id: {
        type: Sequelize.INTEGER(6), 
        allowNull: false,
        primaryKey: true
    },
    code: {
        type: Sequelize.INTEGER(6),
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    students: Sequelize.INTEGER,
    courses: Sequelize.INTEGER
})