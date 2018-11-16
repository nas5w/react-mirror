const rp = require('request-promise')
const config = require('../config')

module.exports = (req, res) => {
	if(!req.body.station) {
		return res.status(400).send({ message: 'A metro station code is required.' })
	}

	// Make call to WMATA API
  const base_uri = 'https://api.wmata.com';
	const rail_uri = `${base_uri}/StationPrediction.svc/json/GetPrediction/${req.body.station}/?api_key=${config.metro_api_key}`;
	return rp(rail_uri)
		.then((response) => res.status(200).send({
			message: 'Metro data retrieved',
			data: JSON.parse(response)
		}));
}