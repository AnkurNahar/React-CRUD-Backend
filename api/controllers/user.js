const userService = require('../../services/UserService');

const getList = async (req, res) => {

    const users = await userService.getList();
    return res.status(users.status).json(users);
}

const createUser = async (req, res) => {

    const user = await userService.createUser(req.body);
    return res.status(user.status).json(user);
}

const updateUser = async (req, res) => {

    const userInfo = await userService.updateUserInfo(req.params.id, req.body);
    return res.status(userInfo.status).json(userInfo);
}

const deleteUser = async (req, res) => {

    const userInfo = await userService.removeUser(req.params.id);
    return res.status(userInfo.status).json(userInfo);
}



module.exports = {
    getList,
    createUser,
    updateUser,
    deleteUser
}