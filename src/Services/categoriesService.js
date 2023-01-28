const { Category } = require('../models');

const newCategory = async (name) => {
    const newCat = await Category.create({ name });
    console.log(newCat);
    const { insertId } = [newCat];
    return insertId;
};

const getAllCategories = async () => {
    const allCategories = Category.findAll({ attributes: ['id', 'name'] });
    return allCategories;
};

module.exports = {
    newCategory,
    getAllCategories,
};