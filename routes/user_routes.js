import express      from 'express';
import Student      from '../controller/students.js'
import Course       from '../controller/courses.js'
import Class        from '../controller/classes.js'
import association  from '../models/associations.js'
import student_course from '../models/students_courses.js';

const student   = new Student   ("Student Constructor")
const course    = new Course    ("Course Constructor")
const classes   = new Class     ("Class Constructor")

const router = express.Router();


//get student info by id
router.get('/students', student.getStdInfo)

//create a student
router.get('/students/create', student.CreateStudent)

//deleteing a student
router.get('/students/delete', student.deleteStudent)

//get class info
router.get('/classes', (req, res) => {
    res.send('Class Page')
})

router.get('/student_course', )

//create a clas
router.get('/class/create', classes.createClass)

//deleting a class
router.get('/class/delete', classes.deleteClass)

//create a course
router.get('/course/create', course.CreateCourse)


export default router;