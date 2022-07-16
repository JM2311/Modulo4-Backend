const User = require("../models/userModel");
const { validationResult } = require("express-validator");
const {bcrypt}= require('bcrypt')

const getUsers = async (req, res) => {
  try {
    const result = await User.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};

const createUser = async (req, res) => {
  const { email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(404).json({ errors: errors.array() });
  }
  try {
    const user = new User({
      email,
      password,
    });
    const newUser = await user.save();
    res.status(201).json("usuario creado con exito");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUsers,
  createUser,
};
