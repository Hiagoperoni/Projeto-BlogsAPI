const { User } = require('../models');

const validateEmail = (req, res, next) => {
    const { email, password } = req.body;
    const regEmail = /\S+@\S+\.\S+/;
    const validEmail = regEmail.test(email);

    if (!email) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    if (validEmail === false) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    if (!password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    if (password.length < 6) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    next();
};

const validateLogin = async (req, res, next) => {
    const { email, password } = req.body;
    const logins = await User.findOne({
        attributes: ['email'],
        where: {
            email,
            password,
        },
    });
    if (!logins) {
        return res.status(400).json({ message: 'Invalid fields' });
    }
    next();
};

module.exports = { 
    validateEmail,
    validateLogin,
};