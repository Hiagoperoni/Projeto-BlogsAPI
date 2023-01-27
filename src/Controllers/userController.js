const userService = require('../Services/userService');

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const newUser = await userService.createUser(displayName, email, password, image);
    req.headers.authorization = newUser;
    return res.status(201).json(newUser);
};

const getAllUsers = async (req, res) => {
    const allUsers = await userService.getAllUsers();
    return res.status(200).json(allUsers);
};

module.exports = {
    createUser,
    getAllUsers,
};