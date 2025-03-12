const mongoose = require('mongoose');

const wasteSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Waste = mongoose.model('Waste', wasteSchema);

module.exports = {
    Waste
};