const Flight = require("../models/flight");

module.exports = {
    index,
    new: newFlights,
    create
}

async function index(req, res){
    try {
        const flightDocuments = await Flight.find({});
        console.log('flightDocuments', flightDocuments)
        res.render('flights/index', {flightDocuments: flightDocuments})

    } catch(err){
        res.send(err)
    }
}

function newFlights(req, res) {
    res.render("flights/new");
}

async function create(req, res, next) {
    console.log(req.body);
    //this is where can make it where the user has to enter a number that is between

}
