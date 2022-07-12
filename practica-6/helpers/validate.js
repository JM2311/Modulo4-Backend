const User = require("../models/userModel");

const validateEmail = async (email) => {
  const isEmail = await User.find({ email });
  if (isEmail.length !== 0) {
    throw new Error(`el usuario ${email} ya existe`);
  }
  return false;
};

module.exports = {
  validateEmail,
};
