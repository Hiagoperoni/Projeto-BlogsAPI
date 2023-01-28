const express = require('express');
const postCont = require('../Controllers/postController');
const { authToken } = require('../Middlewares/authJWTMidd');

const postRouter = express.Router();

postRouter.post('/', authToken, postCont.newBlogPost);

module.exports = postRouter;
