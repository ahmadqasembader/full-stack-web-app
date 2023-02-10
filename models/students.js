import Sequelize from "sequelize";

export default Sequelize.define('students', 
{
    id: {
        type: Sequelize.INTEGER(6), 
        allowNull: false,
        primaryKey: true
    },

    name: Sequelize.STRING(100),
    age: Sequelize.INTEGER,
    classes: Sequelize.INTEGER,
    courses: Sequelize.INTEGER 
})