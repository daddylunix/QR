const router = require('express').Router();
const User = require('../models/User');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const qrcode = require('qrcode');
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.get('/@:id', async (req, res) => {
    const username = req.params.id;
    try {
        const userinfo = await User.findOne({username: username}).select('-password');
        if ( !userinfo ) {
            return res.json('404 :(')
        }
        res.json(userinfo);
    } catch (error) {
        
    }
})


module.exports = router;