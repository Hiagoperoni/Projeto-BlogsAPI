const { BlogPost, PostCategory, User } = require('../models');

const timeElapsed = Date.now();
const today = new Date(timeElapsed);
const dateNow = today.toISOString();

const newBlogPostCategory = async (id, categories) => {
    if (categories.length === 1) {
        await PostCategory.create({ 
            postId: id, 
            categoryId: categories });
    }
    (await (categories.map((eachCat) => PostCategory.create({ 
        postId: id, 
        categoryId: eachCat,
    }))));
};

const newBlogPost = async (email, title, content) => {
    const { dataValues } = await User.findOne({ attributes: ['id'], where: { email } });
    const userId = dataValues.id;
    const published = dateNow;
    const updated = dateNow;
    const newPost = await BlogPost.create({ title, content, userId, published, updated });
    const { id } = newPost.dataValues;
    console.log(newPost);
    const postObj = {
        id,
        title,
        content,
        userId,
        updated,
        published,
    };
    return [id, postObj];
};

module.exports = {
    newBlogPost,
    newBlogPostCategory,
};