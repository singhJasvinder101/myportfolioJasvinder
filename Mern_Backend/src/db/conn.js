const mongoose = require('mongoose');
require('dotenv').config();

const Mongo_URL = process.env.Mongo_URL;



// mongoose.connect("mongodb://127.0.0.1:27017/portfolioMessages")
mongoose.connect(Mongo_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,   // Use this option for hosting
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
    });

console.log('Mongo_URL:', process.env.Mongo_URL);
