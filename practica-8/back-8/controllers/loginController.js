const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json("USUARIO O CONTRASEÑA INEXISTENTES");
  }

  const match = bcrypt.compareSync(password, user.password);
  if (match) {
    return res.status(200).json("LOGUEADO CON EXITO");
  } else {
    return res.status(404).json("USUARIO O CONTRASEÑA INEXISTENTES");
  }
};
module.exports = {
  login,
};
