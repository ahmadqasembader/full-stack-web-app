import dotenv from 'dotenv'
import classs from '../models/classes.js';
dotenv.config();
const config = process.env

import student from '../models/students.js'

class Student{
    constructor(msg){
        console.log("Msg: " + msg);
    }

    CreateStudent(req, res) {
        const {id, name, age, classID} = req.body
        console.log(classID);
        classs.findOne({where: {code: classID}})
        .then((data) => {
            console.log(data.code)
            student.create({id, name, age, classID: data.id})
            res.status(200).json(data)
        })
        
        // console.log('your data is ' + data)
    }

    //view student data
    getStdInfo(req, res) 
    {
        const {id} = req.body;
        console.log({id});
        student.findOne({where: {id}})
        .then(data => res.status(200).json(data))
    };

    updateStudent(){};
    deleteStudent(req, res)
    {
        const {id} = req.body;
        student.destroy({
            where: {id}
        })
        .then(() => res.send("student deleted successfuly"))
    };
}

export default Student;