import Sequelize from 'sequelize';

const sequelize = new Sequelize('users', 'root', 'Ahmad9889bader.', 
    { 
        host: 'localhost',
        dialect: 'mysql'
    })

export default sequelize;
global.sequelize = sequelize;