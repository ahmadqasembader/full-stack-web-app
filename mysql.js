import sequelize from 'sequelize';


// Option 3: Passing parameters separately (other dialects)
const sequelize = new sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});