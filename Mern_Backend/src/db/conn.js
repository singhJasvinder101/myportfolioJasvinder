require("dotenv").config()
const mongoose = require("mongoose")

console.log('Mongo_URL:' + process.env.MONGO_URL);

// Mongo_URL = "mongodb://127.0.0.1:27017/portfolioMessages"
const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB connected")
    } catch (error) {
        console.log({error: error.message})
    }
}
module.exports = connectDB

