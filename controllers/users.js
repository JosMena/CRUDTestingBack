const { request, response } = require('express');

const User = require('../models/user');

const readUsers = async( req = request, res = response ) => {
    try {
        const response = await User.findAll({
            where: {
                Estatus: true
            }
        });
        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: "Problema interno",
            "error": error
        });
    }

}

const createUser = async( req = request, res = response ) => {
    try {
        const { body } = req;
        const response = await User.create(body);
        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: "Problema interno",
            "error": error
        });
    }
}

const updateUser = async( req = request, res = response ) => {

    try {
        const { id } = req.params;
        const { body } = req;
        const response = await User.findByPk(id);
        response.update(body);
        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: "Problema interno",
            "error": error
        });
    }

}

const eliminateUser = async( req = request, res = response ) => {

    try {
        const { id } = req.params;
        const response = await User.findByPk(id);
        response.update({ Estatus: false });
        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: "Problema interno",
            "error": error
        });
    }
}


module.exports = {
    createUser,
    eliminateUser,
    readUsers,
    updateUser,
}