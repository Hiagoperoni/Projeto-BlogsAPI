const { Category } = require('../models');

const allFieldsMidd = (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    if (!title || !content || !categoryIds) {
        res.status(400).json({ message: 'Some required fields are missing' });
    }
    next();
};

const categoryCountMidd = async (req, res, next) => {
    const { categoryIds } = req.body;
    (await (categoryIds.map(async (everyId) => {
        const { count } = await Category.findAndCountAll({ where: { id: everyId } });
        if (count === 0) {
            res.status(400).json({ message: 'one or more "categoryIds" not found' });
        }
    })));
    next();
};

module.exports = {
    allFieldsMidd,
    categoryCountMidd,
};