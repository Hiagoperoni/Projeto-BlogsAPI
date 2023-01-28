const { Category } = require('../models');

const newCategory = async (name) => {
    const newCat = await Category.create({ name });
    console.log(newCat);
    const { insertId } = [newCat];
    return insertId;
};

module.exports = {
    newCategory,
};