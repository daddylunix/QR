const router = require('express').Router();
const User = require('../models/User');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

router.post('/register', async (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
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