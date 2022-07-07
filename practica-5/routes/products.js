const express = require("express");
const router = express.Router();
const prodController = require("../controllers/productController");
const { body } = require("express-validator");

router.get("/", prodController.getAllProducts);

router.get("/:id", prodController.getByIdProducts);

router.post(
  "/",
  body("name")
    .trim()
    .isLength({ min: 5 })
    .withMessage("Debe tener al menos 5 caracteres"),
  body("price")
    .not()
    .isEmpty()
    .isNumeric()
    .withMessage("solo podes ingresar numeros"),
  prodController.createProduct
);

router.delete("/:id", prodController.deleteProductById);

router.patch("/:id", prodController.editProductById);

module.exports = router;
