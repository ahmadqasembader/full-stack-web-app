import Sequelize    from "sequelize";
import sequelize    from "../mysql.js";

const student_course = sequelize.define('student_course', {
    std_id: {
        type: Sequelize.INTEGER(6), 
        allowNull: false,
        primaryKey: true
    },
    std_name: Sequelize.STRING,
    course_id: Sequelize.INTEGER

})



export default student_course