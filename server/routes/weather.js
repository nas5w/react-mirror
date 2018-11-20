const rp = require('request-promise')
const config = require('../config')

module.exports = (req, res) => {
	if (!config.weather_api_key) {
  	return res.status(403).send({ message: 'A weather api key must be configured.' });
	}

  if (!req.body.zip) {
  	return res.status(400).send({ message: 'A zip code is required.' });
  }

  if (req.body.zip.length !== 5) {
  	return res.status(400).send({ message: `Zip code ${req.body.zip} is incorrectly formatted.` });
  }

  // Make call to OpenWeatherMap API
  const base_uri = 'http://api.openweathermap.org/data/2.5'
	const current_uri = `${base_uri}/weather?zip=${req.body.zip},us&units=imperial&appid=${config.weather_api_key}`;
	const forecast_uri = `${base_uri}/forecast?zip=${req.body.zip},us&units=imperial&appid=${config.weather_api_key}`;
	
	return Promise.all([rp(current_uri), rp(forecast_uri)])
		.then((response) => {
			
			let forecastRes = JSON.parse(response[1]);

			// Adjust forecast data format
			let forecast = [
				{ day: forecastRes.list[0].dt_txt, hi: -100, low: 1000, icon: forecastRes.list[5].weather[0].icon },
				{ day: forecastRes.list[8].dt_txt, hi: -100, low: 1000, icon: forecastRes.list[13].weather[0].icon },
				{ day: forecastRes.list[16].dt_txt, hi: -100, low: 1000, icon: forecastRes.list[21].weather[0].icon }
			]

			for (let i = 0; i < 8; i++) {
				forecast[0].hi = Math.max(forecast[0].hi, forecastRes.list[i].main.temp_max);
				forecast[0].low = Math.min(forecast[0].low, forecastRes.list[i].main.temp_min);
			}

			for (let i = 8; i < 16; i++) {
				forecast[1].hi = Math.max(forecast[1].hi, forecastRes.list[i].main.temp_max);
				forecast[1].low = Math.min(forecast[1].low, forecastRes.list[i].main.temp_min);
			}

			for (let i = 16; i < 24; i++) {
				forecast[2].hi = Math.max(forecast[2].hi, forecastRes.list[i].main.temp_max);
				forecast[2].low = Math.min(forecast[2].low, forecastRes.list[i].main.temp_min);
			}

			return res.status(200).send({
			message: 'Weather data retrieved',
			data: { current: JSON.parse(response[0]), forecast: forecast }	
			});
		});


}