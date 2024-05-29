const mongoose = require("mongoose")

const connectDataBase = () => {
    mongoose.connect(process.env.DB_URL).then((con)=>
    console.log("mongoDB connected to database:"+con.connection.host))
}

module.exports = connectDataBase