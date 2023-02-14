import dotenv from 'dotenv'
dotenv.config();
const config = process.env

class Class{
    constructor(msg){
        console.log("Msg: " + msg);
    }

    //create class
    createClass(){};

    //add student
    addStudent(){};

    //get class records 
    //(total no of students, name, id, list of students)
    getClassInfo(){};
    
    //update class records
    updateClass(){};
    
    //delete class records
    deleteClass(){};
}


export default Class;