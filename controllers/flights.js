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
        res.render('flights/index', {flightDocs: flightDocuments})

    } catch(err){
        res.send(err)
    }
}

function newFlights(req, res) {
    res.render("flights/new");
}

async function create(req, res, next) {
    try {
    console.log(req.body)
      const flightDoc = await Flight.create(req.body);
      res.redirect("/flights");
    } catch (err) {
      res.send(err);
    }
}
