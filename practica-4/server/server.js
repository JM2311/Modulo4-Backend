const express = require("express");
const app = express();
const morgan = require("morgan");
const catRoute = require('../routes/cats.route')
require("dotenv").config();
const cors = require('cors')
const port = process.env.PORT;
require('../dataBase/connection')

app.use(morgan("dev"));
app.use(cors())
app.use(express.json());

app.use('/cats',catRoute)

app.listen(port, () => {
  console.log(`estamos escuchando desde el puerto ${port}`);
});
