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
    flightNo:{
        type: Number,
        min: 10,
        max: 9999
    },
    departs: Date,
    // nav: [{
    //     name: string,
    //     url: string,
    //     target: '_self'
    //   }, {
    //     name: string,
    //     url: String,
    //     target: '_self'
    //   }]
    });


module.exports = mongoose.model('Flight', flightSchema);
