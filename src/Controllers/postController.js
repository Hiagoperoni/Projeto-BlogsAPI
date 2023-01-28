const postService = require('../Services/postService');

const newBlogPost = async (req, res) => {
    const { user } = res;
    const { email } = user;
    const { title, content, categoryIds } = req.body;
    const postObj = await postService.newBlogPost(email, title, content);
    await postService.newBlogPostCategory(postObj[0], categoryIds);
    return res.status(201).json(postObj[1]);
};

module.exports = {
    newBlogPost,
};