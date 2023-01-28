const catService = require('../Services/categoriesService');

const newCategory = async (req, res) => {
    const { name } = req.body;
    const newCat = await catService.newCategory(name);
    const newCatObj = {
        id: newCat,
        name,
    };
    return res.status(201).json(newCatObj);
};

module.exports = {
    newCategory,
};