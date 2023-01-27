const authLoginService = require('../Services/loginService');

const authLogin = async (req, res) => {
    const { email, password } = req.body;
    const authent = await authLoginService.authLogin(email, password);
    return res.status(200).json(authent);
};

module.exports = { authLogin };