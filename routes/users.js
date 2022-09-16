const { Router } = require('express');

const { validateCreateUser, validateUpdateUser } = require('../validators/user');

const { 
    createUser,
    eliminateUser,
    readUsers,
    updateUser, 
} = require('../controllers/users');

const router = Router();

router.get('/', readUsers );

router.post('/', validateCreateUser, createUser );

router.put('/:id', validateUpdateUser, updateUser );

router.delete('/:id', eliminateUser );


module.exports = router;