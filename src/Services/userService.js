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

const getUserById = async (id) => {
    const userById = User.findOne({ 
        attributes: ['id', 'displayName', 'email', 'image'],
        where: {
            id,
        },
    });
    return userById;
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
};