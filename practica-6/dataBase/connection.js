const mongoose = require("mongoose");
const dbConnection = async () => {
    try {
        mongoose.connect(process.env.DB_URL)
        console.log("Conexion Exitosa");
    } catch (error) {
        console.log(error);
    }
};

dbConnection()