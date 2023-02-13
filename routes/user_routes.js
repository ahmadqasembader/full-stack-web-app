import express from 'express';

import Student from '../controller/students.js'
import Course from '../controller/courses.js'
import Class from '../controller/classes.js'

const router = express.Router();

const student = new Student("Student Constructor")
const course = new Course("Course Constructor")
const classes = new Class("Class Constructor")

router.get('/students', (req, res) => {
    console.log("Hi")
    console.log(req.body)
    const {id, name, age} = req.body
    
    student.CreateStudent({id, name, age});
    res.send('Student Page')
})

router.get('/courses', (req, res) => {
    // console.log("Courses")
    res.send('Course Page')
})

router.get('/classes', (req, res) => {
    // console.log("Classes")
    res.send('Class Page')
})

export default router;