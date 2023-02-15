import sequelize from '../mysql.js';
import student from "./students.js";
import classes from "./classes.js";
import course from "./courses.js";
import student_course from './students_courses.js';

const association = () => {
    classes.hasOne(student, {foreignKey: 'classID'});
    student.belongsToMany(student_course, {foreignKey: 'std_id', through: 'student_course'});
    course.belongsToMany(student_course, {foreignKey: 'course_id', through: 'student_course'});

     
    sequelize.sync({alter:  true});
}

association();

export default association;