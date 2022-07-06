const express = require("express");
const route = express.Router();
const Cat = require("../models/catModels");

route.get("/", async (req, res) => {
  res.json("le estas pegando al get");
});
route.post("/", async (req, res) => {
  try {
    const gato = new Cat({
      name: req.body.name,
      age: req.body.age,
      img: req.body.img
    });
    const newCat = await gato.save(); 
    res.json(newCat);
  } catch (error) {     
    res.json(error);
  }
});
module.exports = route;
