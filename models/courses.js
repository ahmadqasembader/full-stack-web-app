import Sequelize    from "sequelize";
import sequelize    from "../mysql.js";

const course = sequelize.define('courses', {
    id: {
        type: Sequelize.INTEGER(6), 
        allowNull: false,
        primaryKey: true
    },
    classroomCode: {
        type: Sequelize.INTEGER(6)
    },
    name: Sequelize.STRING(100),
})



export default course