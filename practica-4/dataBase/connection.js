const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("la conexion fue exitosa");
  })
  .catch((err) => {
    console.log(`error al conectarse a la db ${err}`);
  });

module.exports = mongoose