const express = require('express');
const loginController = require('../Controllers/loginController');
const { validateEmail, validateLogin } = require('../Middlewares/loginMidd');

const loginRouter = express.Router();

loginRouter.post('/', validateEmail, validateLogin, loginController.authLogin);

module.exports = loginRouter;