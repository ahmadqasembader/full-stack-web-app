import Sequelize, { Deferrable, Model } from "sequelize";
import sequelize from "../mysql.js";
import course from "./courses.js";

const student = sequelize.define('students', 
{
    id: {
        type: Sequelize.INTEGER(6), 
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: Sequelize.STRING(100),
    age: Sequelize.INTEGER,
})



export default student