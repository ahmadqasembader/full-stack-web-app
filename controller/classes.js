import dotenv from 'dotenv'
import classs from '../models/classes.js';
dotenv.config();
const config = process.env

class Class{
    constructor(msg){
        console.log("Msg: " + msg);
    }

    //create class
    createClass(req, res){
        const {id, code, name} = req.body

        classs.create({id, code, name}).then((data) => res.json(data))
    };

    //add student
    addStudent(){};

    //get class records 
    //(total no of students, name, id, list of students)
    getClassInfo(){};
    
    //update class records
    updateClass(){};
    
    //delete class records
    deleteClass(req, res){
        const {id} = req.body
        classs.destroy({
            where: {id}
        }).then((data) => res.json(data))
    };
}


export default Class;