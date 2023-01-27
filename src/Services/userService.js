const { User } = require('../models');
const { generateToken } = require('../Utils/JWT');

const createUser = async (displayName, email, password, image) => {
    await User.create({ displayName, email, password, image });
    const token = generateToken(email);
    return { token };
};

const getAllUsers = async () => {
    const allUsers = User.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });
    return allUsers;
};

module.exports = {
    createUser,
    getAllUsers,
};