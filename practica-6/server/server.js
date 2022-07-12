const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const userRoute = require("../routes/usersRoute");
require("dotenv").config();

const port = process.env.PORT;
require("../dataBase/connection");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/user", userRoute);
app.listen(port, () => {
  console.log(`estamos escuchando al puerto ${port}`);
});
