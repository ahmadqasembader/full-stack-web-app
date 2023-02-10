import express from 'express';
import bodyParser from 'body-parser'
import router from './routes/user_routes.js'
import sequelize from './mysql.js'
const config = process.env.port || 3000
const app = express();

router.use(bodyParser.urlencoded({extended: true}))
router.use(express.json())

app.use('/home', router)

app.listen(3000, () => {
    console.log("Server is running")
})