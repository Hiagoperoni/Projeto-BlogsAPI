const express = require('express');
const userController = require('../Controllers/userController');
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

module.exports = userRouter;