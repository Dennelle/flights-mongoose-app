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
    departs: Date,
    // nav: [{
    //     name: string,
    //     url: '/flights',
    //     target: '_self'
    //   }, {
    //     name: string,
    //     url: '/new',
    //     target: '_self'
    //   }]
    });


module.exports = mongoose.model('Flight', flightSchema);
