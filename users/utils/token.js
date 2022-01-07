const jwt = require("jsonwebtoken");

const createRefreshToken = payload => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '30d'
    })
};

const createAccessToken = payload => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1d'
    })
};

const token = {
    createRefreshToken,
    createAccessToken
}

module.exports = token;