const express = require("express");
const app = express();
const port = 8080;

app.get("/saludo-obtenido", (req, res) => {
  res.send("Saludo Enviado");
});
app.get("/hola-mundo", (req, res) => {
  res.send("hola mundo");
});
app.post("/creando-saludo", (req, res) => {
  res.send("Saludo Creado");
});
app.delete("/eliminando-saludo", (req, res) => {
  res.send("Saludo Eliminado ");
});
app.patch("/editando-parcialmente", (req, res) => {
  res.send("Saludo Editado Parcialmente ");
});
app.listen(port, () => {
  console.log(`estamos escuchando el puerto ${port}`);
});
