const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true,
        unique: true
    },
    email: {
        type: String,
        required:true,
        unique:true
    },
    password: {
        type: String,
        required: true,
    },
    qrcode: {
        type: String,
        unique: true
    },
    instagram: {
        type: String,
        required: true,
        default:''
    },
    twitter: {
        type: String,
        required: true,
        default:''
    },
    linkedin: {
        type: String,
        required: true,
        default:''
    }
})

module.exports = mongoose.model('User', UserSchema);