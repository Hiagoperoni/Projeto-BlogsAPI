const express = require('express');
const userController = require('../Controllers/userController');
const { authToken } = require('../Middlewares/authJWTMidd');
const { 
    emailPassUserMidd,
    displayNameMidd,
    verifyCadastratedMidd, 
} = require('../Middlewares/userMidd');

const userRouter = express.Router();

userRouter.post(
    '/',
    displayNameMidd,
    emailPassUserMidd,
    verifyCadastratedMidd,
    userController.createUser,
);

userRouter.get(
    '/',
    authToken,
    userController.getAllUsers,
);

module.exports = userRouter;