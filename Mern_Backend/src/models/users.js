const mongoose = require('mongoose')
const {Schema} = require('mongoose')
const validator = require('validator')

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate(val){
            if(!validator.isEmail(val)){
                throw new error("Invalid Email")
            }
        }  
    },
    message: {
        type: String,
        required: true,
    }
})

const newuser = new mongoose.model('newuser', userSchema)
module.exports  = { newuser }