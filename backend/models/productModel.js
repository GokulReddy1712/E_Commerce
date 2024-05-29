const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    images:[
        {
            image:String
        }
    ],
    category:String,
    seller:String,
    stock:String,
    numOfReviews:String,
    createdAt:Date
})

const ProductModel = mongoose.model("products",productSchema)

module.exports = ProductModel