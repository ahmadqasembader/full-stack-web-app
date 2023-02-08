import dotenv from 'dotenv'
dotenv.config();
const config = process.env

class Student{
    constructor(msg){
        console.log("Msg: " + msg);
    }
}

export default Student;