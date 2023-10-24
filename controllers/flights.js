const Flight = require("../models/flight");

module.exports = {
    index,
    new: newFlights,
    create,
    show,
    addDestination
}


async function show(req, res) {
    console.log('something')
    try {
      const flightDocument = await Flight.findById(req.params.id);// req.params.id is a movies id
      console.log(flightDocument, "<----this is the data")
      res.render("flights/show", {flight: flightDocument});
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

async function addDestination(req, res){
	try {
		const flightDoc = await Flight.findById(req.params.id)
		console.log(req.body, " <- contents of the form")
		flightDoc.destinations.push(req.body)
		await flightDoc.save()// this tells the db we add the review
		res.redirect(`/flights/${flightDoc._id}`)
		// res.redirect(`/flights/${req.params.id}`)
		// Either redirect works ^

	} catch(err){
		console.log(err)
		res.send(err)
	}

}
