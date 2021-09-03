const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const { route } = require('./login');
const { response } = require('express');
require ('dotenv').config();

router.get('/profile', async (req, res) => {
    const userCookie = req.cookies.token;
    if ( !userCookie ) {
    // later it should redirect to 404 page.
    return res.json('Please Sign in first.');
    }
    const token = jwt.verify(userCookie, process.env.JWT);
    if ( !token ) {
    return res.json('Please Sign in first.');
    }
    try {
        const user = await User.findOne({_id: token.id });
        if ( !user ) {
            return res.json('Please Sign in first.');
        }
        return res.json(user);
        } catch (error) {
        res.json(error);
    }
})

module.exports = router;