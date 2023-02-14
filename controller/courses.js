import dotenv from 'dotenv'
import course from '../models/courses.js';
dotenv.config();
const config = process.env

class Course{
    constructor(msg){
        console.log("Msg: " + msg);
    }

    CreateCourse(crs){
        console.log("Creating a new course");
        return course.create(crs);
    }

    addStudent(){};

    getInfo(){};
    updateCourse(){};
    deleteCourse(id){
        course.destroy({
            where: {id}
        })
    };
}

export default Course;