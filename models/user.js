const { DataTypes } = require('sequelize');

const db = require('../database/connection');

const User = db.define(
    'User', {
        NumeroEmpleado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        NombreCompletoEmpleado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        FechaNacimiento: {
            type: DataTypes.STRING,
            allowNull: false
        },
        NoCelular: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Estatus: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    },
    {
        timestamps: false,
    }    
);


module.exports = User;