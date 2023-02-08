import dotenv from 'dotenv'
dotenv.config();
const config = process.env

class Course{
    constructor(msg){
        console.log("Msg: " + msg);
    }
}

export default Course;