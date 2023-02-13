import Sequelize from "sequelize";
import sequelize from "../mysql";
import student from "./students";

const classs = sequelize.define('classes', {
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


export default classs;