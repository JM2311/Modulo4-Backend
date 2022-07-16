const { Router } = require("express");
const route = Router();
const { body } = require("express-validator");
const {emailExist} = require('../helpers/validations')
const { getUsers, createUser } = require("../controllers/userController");

route.get("/", getUsers);

route.post(
  "/",
  body("email")
    .not()
    .isEmpty()
    .withMessage("El campo de email es obligatorio")
    .isEmail()
    .withMessage("Coloca un email valido").custom(emailExist),
  body("password")
    .matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)
    .withMessage("La contraseña no cumple los requisitos"),
  createUser
);

module.exports = route;
