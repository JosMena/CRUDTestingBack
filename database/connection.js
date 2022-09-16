const { Sequelize } = require('sequelize');

const db = new Sequelize(
    process.env.DB,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
    host: 'localhost',
    dialect: 'mysql'
    }
);

module.exports = db;