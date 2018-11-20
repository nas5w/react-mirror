const rp = require('request-promise')
const config = require('../config')

module.exports = (req, res) => {
	if (!config.weather_api_key) {
  	return res.status(403).send({ message: 'A weather api key must be configured.' });
	}

  console.log(req);
  if (!req.body.zip) {
  	return res.status(400).send({ message: 'A zip code is required.' });
  }

  if (req.body.zip.length !== 5) {
  	return res.status(400).send({ message: `Zip code ${req.body.zip} is incorrectly formatted.` });
  }

  // Make call to OpenWeatherMap API
  const base_uri = 'http://api.openweathermap.org/data/2.5'
	const current_uri = `${base_uri}/weather?zip=${req.body.zip},us&appid=${config.weather_api_key}`;
	const forecast_uri = `${base_uri}/forecast?zip=${req.body.zip},us&appid=${config.weather_api_key}`;
	
	return Promise.all([rp(current_uri), rp(forecast_uri)])
		.then((response) => res.status(200).send({
			message: 'Weather data retrieved',
			data: { current: JSON.parse(response[0]), forecast: JSON.parse(response[1]) }	
		}));


}