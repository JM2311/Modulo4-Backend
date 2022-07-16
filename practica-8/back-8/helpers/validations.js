const User = require("../models/userModel");

const emailExist = async (email) => {
  const user = await User.findOne({ email });
  if (user) {
    throw new Error(`el usuario ${email} ya existe`);
  }
  return false;
};

module.exports = {
  emailExist,
};
