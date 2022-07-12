const { Router } = require("express");
const route = Router();
const userControllers = require("../controllers/userControllers");
const { body } = require("express-validator");
const { validateEmail } = require("../helpers/validate");

route.get("/", userControllers.getUsers);
route.post(
  "/",
  body("email")
    .not()
    .isEmpty()
    .withMessage("El correo es obligatorio")
    .isEmail()
    .withMessage("ingresa un email valido")
    .custom(validateEmail),
  body("password")
    .not()
    .isEmpty()
    .trim()
    .withMessage("Ingresa un password valido"),
  userControllers.postUsers
);

module.exports = route;
