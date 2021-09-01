const express = require('express');
const app = express();
const mongoose = require("mongoose");
const User = require("./models/User");
require('dotenv').config()

const password = process.env.USER_PASSWORD
console.log(password);

const db = async () => {
try {
    mongoose.connect(`mongodb+srv://admin:${password}@qr-project.j6yuz.mongodb.net/QR?retryWrites=true&w=majority`, {useNewUrlParser: true}, () => {
        console.log('connected to mongodb.')
    });
} catch (error) {
    console.error(err);
}
}
db();

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
    console.log('up and running on port 5000')
})