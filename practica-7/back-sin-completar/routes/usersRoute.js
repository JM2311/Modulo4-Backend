const { Router } = require("express");
const route = Router();
const { getUsers, createUser } = require("../controllers/userController");
const { body } = require("express-validator");
const { emailExist } = require("../helpers/validation");
route.get("/", getUsers);

route.post(
  "/",
  body("email")
    .not()
    .isEmpty()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("Introduce un email valido")
    .custom(emailExist),
  createUser
);

module.exports = route;
