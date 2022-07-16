const User = require("../models/userModel");

const emailExist = async (email) => {
  const search = await User.find({ email });
  if (search.length !== 0) {
    throw new Error(`el usuario ${email} ya esta en uso.`);
  }
  return false;
};
module.exports = {
  emailExist,
};
