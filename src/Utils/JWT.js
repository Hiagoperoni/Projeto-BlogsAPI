const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET || 'suaSenhaSecreta';

const generateToken = ({ email }) => jwt.sign({ email }, TOKEN_SECRET);

const verifyToken = async (token) => {
    if (!token) {
        const error = new Error('Token not found');
        error.status = 401;
        throw error;
    }
    try {
        const openToken = await jwt.verify(token, TOKEN_SECRET);
        return openToken;
    } catch (err) {
        const error = new Error('Token not found');
        error.status = 401;
        throw error;
    }
};

module.exports = {
    generateToken,
    verifyToken,
};