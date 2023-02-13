import Sequelize from "sequelize";
import sequelize from "../mysql.js";
import student from "./students.js";

const course = sequelize.define('courses', {
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



export default course