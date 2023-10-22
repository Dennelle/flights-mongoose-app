const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: ['American', 'United', 'Delta', 'British Airways']
    },
    airport: {
        type: String,
        enum: ['JFK', 'DCA', 'IAD', 'LGA']
    },
    flightNo: Number,
    departs: Date
})

module.exports = mongoose.model('Flight', flightSchema);
