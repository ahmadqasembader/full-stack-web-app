import dotenv from 'dotenv'
dotenv.config();
const config = process.env

class Class{
    constructor(msg){
        console.log("Msg: " + msg);
    }
}


export default Class;