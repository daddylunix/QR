const express = require('express');
const app = express();
const mongoose = require("mongoose");
const User = require("./models/User");
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

app.get('/', async (req, res) => {
    const user = await new User({
        username:'hellothere'
    });
    try {
        const saveduser = await user.save();
        res.json(user);
    } catch (error) {
        res.json(error)
    }
})

app.listen(5000, () => {
    db();
    console.log('Server started on port 3000! 🚀')
    
})