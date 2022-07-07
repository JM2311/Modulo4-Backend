const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()
const productsRouter = require('../routes/products')
require('../dataBase/connection')
const port = process.env.port

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/products', productsRouter)


app.listen(port,()=>{
    console.log(`estamos escuchando el puerto ${port}`);
})