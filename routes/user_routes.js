import express      from 'express';
import Student      from '../controller/students.js'
import Course       from '../controller/courses.js'
import Class        from '../controller/classes.js'
import association  from '../models/associations.js'

const student   = new Student("Student Constructor")
const course    = new Course("Course Constructor")
const classes   = new Class("Class Constructor")

const router = express.Router();


router.get('/students', (req, res) => {
    
    association();
    
    const {id, name, age} = req.body
    
    student.CreateStudent({id, name, age});
    res.send('Student Page')
})

router.get('/students/delete', (req, res) => {
    const {id} = req.body;
    console.log(id)
    student.deleteStudent(id);
    res.send('student deleted successfuly!');
})


router.get('/course/create', (req, res) => {    
    
    association();
    
    const {id, code, name} = req.body

    course.CreateCourse({id, code ,name});
    res.send('Course Page')
})


router.get('/course/delete', (req, res) => {
    const {id} = req.body;
    console.log(id)
    course.deleteCourse(id);
    res.send('student deleted successfuly!');
})

router.get('/classes', (req, res) => {
    res.send('Class Page')
})

export default router;