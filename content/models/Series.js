const mongoose = require('mongoose');

const Series = mongoose.Schema({
    title: {type: String},
    description: { type: String},
    genre: { type: String },
    maturity: { type: String },
    slug: { type: String },
}, {
    timestamps: true,
}); 

module.exports = mongoose.model('series', Series);