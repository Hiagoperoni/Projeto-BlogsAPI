const { User } = require('../models');
const { generateToken } = require('../Utils/JWT');

const createUser = async (displayName, email, password, image) => {
    await User.create({ displayName, email, password, image });
    const token = generateToken(email);
    return { token };
};

module.exports = {
    createUser,
};