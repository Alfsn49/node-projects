import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    'practica_dbm',
    'postgres', 
    'sns2001',
    {
    host:'localhost',
    dialect:'postgres'
});


export default sequelize;