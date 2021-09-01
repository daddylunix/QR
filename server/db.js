const mongoose = require("mongoose");
require('dotenv').config()
const password = process.env.USER_PASSWORD

const db = async () => {
    try {
        mongoose.connect(`mongodb+srv://admin:${password}@qr-project.j6yuz.mongodb.net/QR?retryWrites=true&w=majority`, {useNewUrlParser: true}, () => {
            console.log('MongoDB Atlas Connected! 🌏')
        });
    } catch (error) {
        console.error(err);
    }
    }

    module.exports = db;