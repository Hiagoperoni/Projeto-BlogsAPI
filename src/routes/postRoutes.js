const express = require('express');
const postCont = require('../Controllers/postController');
const { authToken } = require('../Middlewares/authJWTMidd');
const { allFieldsMidd, categoryCountMidd } = require('../Middlewares/postMidd');

const postRouter = express.Router();

postRouter.post(
    '/',
    authToken,
    allFieldsMidd,
    categoryCountMidd,
    postCont.newBlogPost,
);

module.exports = postRouter;
