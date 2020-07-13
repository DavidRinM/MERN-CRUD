const usersModel = require("../models/Users");

const userCtrl = {};

userCtrl.getUsers = async (req, res) => {
    const users = await usersModel.find();
    res.json(users);
}

userCtrl.createUser = async (req, res) => {
    const { username } = req.body;
    const newUser = new usersModel({username});

    await newUser.save();
    res.json({message: "Users created"})
}

userCtrl.deleteUser = async (req, res) => {
    await usersModel.findByIdAndDelete(req.params.id);
    res.json({message: "User deleted"})
}

module.exports = userCtrl;