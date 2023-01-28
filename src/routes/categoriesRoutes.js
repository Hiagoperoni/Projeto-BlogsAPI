const express = require('express');
const categoryCont = require('../Controllers/categoriesController');
const { authToken } = require('../Middlewares/authJWTMidd');
const { catNameMidd } = require('../Middlewares/categoriesMidd');

const categoryRouter = express.Router();

categoryRouter.post(
    '/',
    authToken,
    catNameMidd,
    categoryCont.newCategory,
);

module.exports = categoryRouter;