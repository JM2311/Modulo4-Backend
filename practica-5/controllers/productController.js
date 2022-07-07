const Product = require("../models/product");
const {validationResult}= require('express-validator')

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json(error);
  }
};
const getByIdProducts = async (req, res) => {
  const { id } = req.params;
  try {
    const products = await Product.findById(id);
    if (products !== null) {
      res.status(200).json(products);
    } else {
      res.status(404).json("no se encontro el producto");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
const createProduct = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    } 
  const { name, price, quantity } = req.body;
  try {
    const prod = new Product({
      name: name,
      price: price,
      quantity: quantity,
    });
    const newProd = await prod.save();
    res.status(201).json(newProd);
  } catch (error) {
    res.status(400).json(error);
  }
};
const deleteProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const products = await Product.findByIdAndRemove(id);
    if (products !== null) {
      res.status(200).json(products);
    } else {
      res.status(404).json("no se encontro el producto");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
const editProductById = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const products = await Product.findByIdAndUpdate(id, body, { new: true });
    if (products !== null) {
      res.status(200).json(products);
    } else {
      res.status(404).json("no se encontro el producto");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  getAllProducts,
  getByIdProducts,
  createProduct,
  deleteProductById,
  editProductById,
};
