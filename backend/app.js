const express = require("express")
const app = express()
const dotenv = require("dotenv")
const path = require("path")
const cors = require("cors")
const connectDataBase = require("./config/connectdataBase")
dotenv.config({path:path.join(__dirname,"config","config.env")})

const products = require("./routes/product")
const order = require("./routes/order")

connectDataBase()
app.use(express.json())
app.use(cors())
app.use(products)
app.use(order)

app.listen(process.env.PORT,()=>{
    console.log(`server is lisening on port ${process.env.PORT} in ${process.env.NODE_ENV}`);
})