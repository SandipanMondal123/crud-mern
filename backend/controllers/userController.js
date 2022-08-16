
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


//@desc register new user
//@route POST /api/users
//@acess public
const registerUser = asyncHandler (async (req,res) => {
    const { name, email, password} = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please add all fields');
    }
    res.json({message: 'Register User'})
})
//@desc login new user
//@route POST /api/login
//@acess public
const loginUser = asyncHandler(async (req,res) => {
    res.json({message: 'Login User'})
})

//@desc get  user data
//@route GET /api/users/me
//@acess public
const getMe = asyncHandler(async (req,res) => {
    res.json({message: 'User data'})
})

module.exports = {
    registerUser,
    loginUser,
    getMe,

}