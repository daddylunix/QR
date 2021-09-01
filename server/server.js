const express = require('express');
const app = express();
const mongoose = require("mongoose");
const User = require("./models/User");

const db = async () => {
try {
    mongoose.connect('mmongodb+srv://lunix:<password>@qr-project.j6yuz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true});
} catch (error) {
    console.error(err);
}
}

app.get('/', async (req, res) => {
    const user = await new User();
    const saveduser = await user.save();
    res.json(user);
})

app.listen(5000, () => {
    console.log('up and running on port 5000')
})