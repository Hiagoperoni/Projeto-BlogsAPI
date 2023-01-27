const { verifyToken } = require('../Utils/JWT');

const authToken = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        res.status(401).json('Token not found');
    }
    const user = await verifyToken(token);
    if (!user) {
        res.status(401).json('Expired or invalid token');
    }
    res.locals.user = user;
    next();
};

module.exports = authToken;