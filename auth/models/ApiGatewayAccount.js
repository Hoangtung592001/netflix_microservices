const mongoose = require('mongoose');

const ApiGatewayAccount = mongoose.Schema({
    username: { type: String, maxLength: 255, required: true, unique: true},
    password: { type: String, required: true},
}, {
    timestamps: true,
}); 

module.exports = mongoose.model('ApiGatewayAccount', ApiGatewayAccount);