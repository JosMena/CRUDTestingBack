const { check } = require('express-validator');

const { fieldValidation } = require('../middlewares/validate-data')

const validateCreateUser = [
    check("NumeroEmpleado")
        .isInt()
        .isLength(6),
    check("NombreCompletoEmpleado")
        .isLength({ min:5, max:100 }),
    check("NoCelular")
        .isInt()
        .isLength(10),
    (req, res, next) => {
        fieldValidation(req, res, next);
    }
];

const validateUpdateUser = [
    check("NoCelular")
        .isInt()
        .isLength(10),
    (req, res, next) => {
        fieldValidation(req, res, next);
    }
];

module.exports = {
    validateCreateUser,
    validateUpdateUser
}