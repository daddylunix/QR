const express = require('express');
const app = express();
const mongoose = require("mongoose");
const User = require("./models/User");
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()
const password = process.env.USER_PASSWORD
const db = require('./db');
const qrcode = require('qrcode');
const cookieParser = require('cookie-parser');

// Middleware
app.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}))
app.use(bodyParser.json());
app.use(cookieParser());

// Routes
app.use('/', require('./routes/register'));
app.use('/', require('./routes/login'));
app.use('/', require('./routes/profile'));
app.use('/', require('./routes/@viewprofile'));


app.get('/qrtest', async (req, res) => {
    const generateQR = async text => {
        try {
            const response = await qrcode.toDataURL(text);
            console.log(response);
        } catch (error) {
            console.log(err);
        }
    }
    generateQR('https://youtube.com/test123/lunix');
})

// Server
app.listen(5000, () => {
    db();
    console.log('Server started on port 3000! 🚀')
    
})