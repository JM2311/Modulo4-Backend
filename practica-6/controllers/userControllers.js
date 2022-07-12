const User = require("../models/userModel");
const { validationResult } = require("express-validator");
const bcript = require('bcrypt')
const getUsers = async (req, res) => {
  try {
    const result = await User.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json("no se encontro usuarios");
  }
};
const postUsers = async (req, res) => {
  const { email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(404).json({ errors: errors.array() });
  }
  try {
    const user = new User({
      email,
      password,
    });
    const salt = bcript.genSaltSync(10)
    user.password = bcript.hashSync(password,salt)
    const newUser = await user.save();
    res.status(201).json("Usuario creado con exito");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUsers,
  postUsers,
};
