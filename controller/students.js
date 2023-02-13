import dotenv from 'dotenv'
dotenv.config();
const config = process.env

import student from '../models/students.js'

class Student{
    constructor(msg){
        console.log("Msg: " + msg);
    }

    CreateStudent(std){
        console.log("Creating a new student");
        return student.create(std);
    }
}

export default Student;