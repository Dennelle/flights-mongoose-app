const Flight = require("../models/flight");

module.exports = {
    index,
    new: newFlights,
    create,
    show
}


async function show(req, res) {
    console.log('something')
    try {
      const flightDocuments = await Flight.findById(req.params.id);// req.params.id is a movies id
      res.render("flights/show", {flight: flightDocuments});
    } catch(err){
      console.log(err)
      res.send(err)
    }

  }
async function index(req, res){
    try {
        const flightDocuments = await Flight.find({});
        console.log('flightDocuments', flightDocuments)
        res.render('flights/index', {flight: flightDocuments})

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
      const flightDocs = await Flight.create(req.body);
      res.redirect("/flights");
    } catch (err) {
      res.send(err);
    }
}
