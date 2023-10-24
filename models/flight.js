const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    airport: {
        type: String,
        enum: ['JFK','LGA','DCA','IAD']
    },
    arrival: Date
})

const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: ['American', 'United', 'Delta', 'British Airways'],
        default: 'British Airways'
    },
    airport: {
        type: String,
        enum: ['JFK', 'DCA', 'IAD', 'LGA'],
        default: 'DCA'
    },
    flightNo:{
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: Date,
    destinations: [destinationSchema]
    });


module.exports = mongoose.model('Flight', flightSchema);
