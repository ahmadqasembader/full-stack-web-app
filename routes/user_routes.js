import express from 'express';

import Student from '../controller/students.js'
import Course from '../controller/courses.js'
import Class from '../controller/classes.js'

const router = express.Router();

const student = new Student("Student Constructor")
const course = new Course("Course Constructor")
const classs = new Class("Class Constructor")

router.get('/students', (req, res) => {
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