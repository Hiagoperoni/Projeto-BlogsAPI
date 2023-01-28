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

const getUserById = async (req, res) => {
    const { id } = req.params;
    const userById = await userService.getUserById(id);
    if (!userById) {
        return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(userById);
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
};