const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const user = { email: "dbx_a@gmail.com", userId: 1 };
const port = process.env.PORT;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); // para que el backend escuche o entienda json

app.get("/obtener-saludo", (req, res) => {
  res.json("le pegaste al back con get");
});
app.post("/creando-saludo", (req, res) => {
  console.log(req.body);
  res.send("le pegaste al back con post");
});
app.post("/login", (req, res) => {
  if (req.body.email == user.email && req.body.userId == user.userId) {
    res.status(200).json(`el usuario ${user.email} ha sido creado`)
  }else{
    res.status(401).send('el email o el id no es correcto')
  }
});
app.listen(port, () => {
  console.log(`estamos escuchando el puerto ${port}`);
});
