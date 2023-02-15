import Sequelize from "sequelize";
import sequelize from "../mysql.js";
import student from "./students.js";

const classs = sequelize.define('classes', {
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




export default classs;