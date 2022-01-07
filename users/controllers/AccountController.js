const User = require('../models/User');
const moment = require('moment');
const bcrypt = require("bcrypt");
const validate = require('../utils/validate');
const token = require('../utils/token');
class AccountController {
    home(req, res) {
        res.send('Hello World!');
    }

    async signup(req, res) {
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
    }

    async signin(req, res) {
        try {
            const { email, password } = req.body;
            const foundUser = await User.findOne({ email: email })
            if (!foundUser) {
                return res.json({
                    error: true,
                    msg: 'User do not exist!'
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
                const refreshToken = token.createRefreshToken({
                    id: foundUser._id,
                    isAdmin: foundUser.isAdmin
                });
                const accessToken = token.createAccessToken({
                    id: foundUser._id,
                    isAdmin: foundUser.isAdmin
                });
                res.cookie('refreshToken', refreshToken, {
                    maxAge: 30 * 24 * 60 * 60 * 1000,
                    httpOnly: true
                })
                return res.json({
                    error: false,
                    msg: 'Sign in successfully',
                    accessToken: accessToken,
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
    }

    signout(req, res, next) {

    }
}

module.exports = new AccountController();