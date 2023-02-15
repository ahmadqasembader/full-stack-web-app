import dotenv from 'dotenv'
import course from '../models/courses.js';
dotenv.config();
const config = process.env

class Course{
    constructor(msg){
        console.log("Msg: " + msg);
    }

    CreateCourse(req, res){
        const {id, classroomCode, name} = req.body

        course.create({id, classroomCode, name}).then((data) => res.json(data))
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