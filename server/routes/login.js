const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

router.post('/login', async (req, res) => {
    if (!req.body.email || !req.body.password ) {
        return res.json('Credentials missing :( ')
    }
    const emailExists = await User.findOne({ email: req.body.email });
    if ( !emailExists ) {
        return res.json(`User doesn't exist :( `)
    }
    try {
        const user = await User.findOne({email: req.body.email});
        if ( !user ) {
            return res.json(`User doesn't exist :( `)
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if ( !validPassword ) {
            return res.json('Invalid Credentials :( ')
        }
        res.json(user);
    } catch (error) {
        res.json(error);
        console.error(error);
    }
})

module.exports = router;