const User = require('../models/User');
const moment = require('moment');
const bcrypt = require("bcrypt");
const validate = require('../helpers/validate');
const jwt = require("jsonwebtoken");

const AccountController = {
    // @desc    Get all transactions
    // @route   GET /api/v1/transactions
    // @access  Public
    signup: async (req, res) => {
        try {
            const { firstName, email, password } = req.body;
            const user_email = await User.findOne({ email });
            if (user_email) {
                return res.json({
                    error: true,
                    msg: "This email is already registered. Please use another email.",
                });
            }
            if (!validate.validateEmail(email)) {
                return res.json({
                    error: true,
                    msg: 'Please, type valid email. Your Email is invalid.'
                })
            }
            else if (!validate.validatePassword(password)) {
                return res.json({
                    error: true,
                    msg: 'Please, Your password must contain at least 8 characters, one letter, one number and one special character'
                })
            }
            const passwordHash = await bcrypt.hash(password, 12);
            const newUser = new User({
                firstName: firstName,
                email: email,
                password: passwordHash
            })
            await newUser.save();
            return res.json({
                error: false,
                msg: 'Sign up successfully'
            })
        }
        catch(err) {
            return res.status(500).json({ error: true, msg: err.message });
        }
    },
    
    signin: async (req, res) => {
        try {
            const { email, password } = req.body;
            const foundUser = await User.findOne({ email: email })
            if (!foundUser) {
                return res.json({
                    error: true,
                    msg: 'User do not exist! Please, try another one!'
                });
            }
            const isPasswordValid = await bcrypt.compare(password, foundUser.password);
            if (!isPasswordValid) {
                return res.json({
                    error: true,
                    msg: 'Your password you have entered is invalid, please try again.'
                })
            }
            else {
                const payload = {
                    id: foundUser._id,
                    isAdmin: foundUser.isAdmin
                }
                const refreshToken = createRefreshToken(payload);
                const accessToken = createAccessToken(payload);
                return res.json({
                    error: false,
                    msg: 'Sign in successfully',
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                    user: {
                        ...foundUser._doc,
                        password: ""
                    }
                })
            }
        }
        catch(err) {
            return res.status(500).json({
                error: true,
                msg: err.message
            })
        }
    },
    
    signout: async (req, res) => {
        try {
            res.clearCookie('refreshToken');
            return res.json({
                error: false,
                msg: 'Logged out!'
            });
        }
        catch(err) {
            return res.json({
                error: true,
                msg: err.message
            })
        }
    }
}

createRefreshToken = payload => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET)
};

createAccessToken = payload => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET)
};

module.exports = AccountController;