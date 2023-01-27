const { verifyToken } = require('../Utils/JWT');

const authToken = async (req, res, next) => {
    const token = req.headers.authorization;
    const user = await verifyToken(token);
    res.user = user;
    next();
};

module.exports = {
    authToken, 
};