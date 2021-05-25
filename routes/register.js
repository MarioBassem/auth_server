const express = require('express');
const router = express.Router();
const User = require('../db/models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
    const {email, password} = req.body;
    try{
        //check if email exists
        if(await User.findOne({where: {email : email}})){
            throw new Error('Email already exists!');
        }
        //check password length
        if(password.length < 8){
            throw new Error('Password length must be greater than 7')
        }
        //generate hash
        const hash = await bcrypt.hash(password, 10);

        const user = await User.create({email: email, password_hash: hash});

        const token = await jwt.sign({id: user.id, email: user.email, permissions: []}, process.env.TOKEN_SECRET, {expiresIn: '1800s'});

        res.json(token);
        

    } catch (err) {
        console.log('Error: ' + err + '\n');
    }
});

module.exports = router;