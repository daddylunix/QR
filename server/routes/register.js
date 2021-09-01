const router = require('express').Router();
const User = require('../models/User');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
    const bcryptSalt = await bcrypt.genSalt(13);
    const hashedPassword = await bcrypt.hash(req.body.password, bcryptSalt);
    const usernameExists = await User.findOne({username: req.body.username});
    const emailExists = await User.findOne({email:req.body.email});
    if (!req.body.username || !req.body.email || !req.body.password ) {
        return res.json('Credentials missing')
    }
    if (usernameExists || emailExists) {
        return res.json("User already exists")
    };
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    });
    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (error) {
        console.error(error);
        res.json(error);
    }
})

module.exports = router;