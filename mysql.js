import Sequelize from 'sequelize';

const sequelize = new Sequelize('users', 'root', '', 
    { 
        host: 'localhost',
        dialect: 'mysql'
    })

export default sequelize;
global.sequelize = sequelize;