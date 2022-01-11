const User = require('../models/User');
const ApiGatewayAccount = require('../models/ApiGatewayAccount');
const moment = require('moment');
const bcrypt = require("bcrypt");
const validate = require('../helpers/validate');
const jwt = require("jsonwebtoken");

const AuthController = {
    authUser: async (req, res) => {
        try {
            const { accessToken } = req.body;
            if (accessToken) {
                jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, function(err, payload) {
                    if (err) {
                        return res.json({
                            error: true,
                            msg: 'Please, you do not sign in now!'
                        })
                    }
                    return res.json({
                        error: false,
                        accessToken: accessToken,
                        user: {
                            id: payload.id,
                            isAdmin: payload.isAdmin
                        }
                    })
                })
            }
        }
        catch(err) {
            return res.json({
                error: true,
                msg: err.message
            })
        }
    },
    authApiGateway: async (req, res) => {
        const { username, password } = req.body;
        ApiGatewayAccount.findOne({ username: username})
            .then(foundUser => {
                if (!foundUser) {
                    return res.json({
                        error: true,
                        msg: 'User do not exist!'
                    });
                }
                const isMatched = bcrypt.compare(password, foundUser.password);
                if (isMatched) {
                    return res.json({
                        error: false,
                        msg: 'Authenticate successfully!'
                    });
                }
                else {
                    return res.json({
                        error: true,
                        msg: 'Your password you typed is incorrect!'
                    });
                }
            })
    },
    grantAccessToken: async(req, res) => {
        try {
            const refreshToken = req.body.refreshToken;
            if (refreshToken) {
                jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, function(err, payload) {
                    if (err) {
                        return res.json({
                            error: true,
                            msg: 'Please, you do not sign in now!'
                        })
                    }
                    User.findById(payload.id)
                        .then(foundUser => {
                            if (!foundUser) {
                                return res.json({
                                    error: true,
                                    msg: 'Please, you do not sign in now!'
                                })
                            }
                            else {
                                const accessToken = createAccessToken(payload);
                                return res.json({
                                    error: false,
                                    msg: 'Refresh token successfully',
                                    accessToken: accessToken,
                                    user: {
                                        ...foundUser._doc,
                                        password: ""
                                    }
                                })
                            }
                        })
                        .catch(err => {
                            return res.json({
                                error: true,
                                msg: err.message
                            })
                        })
                })
            }
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
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '30d'
    })
};

module.exports = AuthController;