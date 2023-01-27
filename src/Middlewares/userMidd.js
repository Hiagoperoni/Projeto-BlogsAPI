const { User } = require('../models');

const emailPassUserMidd = (req, res, next) => {
    const { email, password } = req.body;
    const regEmail = /\S+@\S+\.\S+/;
    const validEmail = regEmail.test(email);
    if (!validEmail) {
        return res.status(400).json({ message: '"email" must be a valid email' });
    }
    if (password.length < 6) {
        return res.status(400)
            .json({ message: '"password" length must be at least 6 characters long' });
    }
    next();
};

const displayNameMidd = (req, res, next) => {
    const { displayName } = req.body;
    if (displayName.length < 8) {
        return res.status(400)
            .json({ message: '"displayName" length must be at least 8 characters long' });
    }
    next();
};

const verifyCadastratedMidd = async (req, res, next) => {
    const { email } = req.body;
    const isCadastrated = await User.findOne({
        attributes: ['email'],
        where: {
            email,
        },
    });
    if (isCadastrated) {
        return res.status(409)
            .json({ message: 'User already registered' });
    }
    next();
};

module.exports = {
    emailPassUserMidd,
    displayNameMidd,
    verifyCadastratedMidd,
};