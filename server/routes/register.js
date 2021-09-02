const router = require('express').Router();
const User = require('../models/User');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const qrcode = require('qrcode');

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
    try {
        const qr = await qrcode.toDataURL(`http://localhost:5000/@${req.body.username}`);
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            qrcode: qr
        });
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (error) {
        res.json(error);
        console.error(error);
    }
})

module.exports = router;