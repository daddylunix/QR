const express = require('express');
const app = express();
const mongoose = require("mongoose");
const User = require("./models/User");
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()
const password = process.env.USER_PASSWORD
const db = require('./db');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/', require('./routes/register'));
app.use('/', require('./routes/login'));


// Server
app.listen(5000, () => {
    db();
    console.log('Server started on port 3000! 🚀')
    
})