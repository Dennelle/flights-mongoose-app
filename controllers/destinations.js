const Flight = require("../models/flight");

module.exports = {
    create
}

//add a create function in here
async function create(req, res){

	// find the movie first
	try {
		const flightDocs = await Flight.findById(req.params.id)
		console.log(req.body, " <- contents of the form")
		flightDocs.destinations.push(req.body)
		await flightDocs.save()// this tells the db we add the review
		res.redirect(`/flights/${flightDocs._id}`)
		// res.redirect(`/flights/${req.params.id}`)
		// Either redirect works ^

	} catch(err){
		console.log(err)
		res.send(err)
	}

}
