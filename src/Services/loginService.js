const { User } = require('../models');
const { generateToken } = require('../Utils/JWT');

const authLogin = async (email, password) => {
    const user = await User.findOne({
        attributes: ['email'],
        where: {
            email,
            password,
        },
    });
    const token = generateToken(user.dataValues);
    return { token };
};

module.exports = { authLogin };