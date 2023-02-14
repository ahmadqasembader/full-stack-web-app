import sequelize from '../mysql.js';
import student from "./students.js";
import classes from "./classes.js";
import course from "./courses.js";

const association = () => {
    student.hasOne(course, {foreignKey: 'std_id'});
    sequelize.sync({alter:  true});
}

export default association;