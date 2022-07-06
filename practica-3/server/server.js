const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const catRouter = require("../routes/gatos");
const port = process.env.URL_BASE;
const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/backcat")
  .then(() => {
    console.log("conectamos a la db con exito");
  })
  .catch((err) => {
    console.log("hubo un error con la db", err);
  });

const Cat = mongoose.model("Cat", { name: String, age: Number });
const waki = new Cat({ name: "Wakanda", age: 3 });
waki
  .save()
  .then(() => console.log("meow"))
  .catch((err) => console.log("ocurrio un error"));

app.use("/cats", catRouter);

app.listen(port, () => {
  console.log(`escuchando desde el puerto ${port}`);
});
