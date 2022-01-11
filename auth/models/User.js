const mongoose = require('mongoose');

const User = mongoose.Schema({
    firstName: {type: String, required: true},
    email: { type: String, maxLength: 255, required: true, unique: true},
    password: { type: String, required: true},
    watchAgain: [{ type: Object }],
    favoriteMovie: [{ type: mongoose.Types.ObjectId, ref: "Movie" }],
    isAdmin: { type: Boolean, default: false},
    createdAt: { type: Date },
    updatedAt: { type: Date, default: Date.now}
}, {
    timestamps: true,
}); 

module.exports = mongoose.model('User', User);