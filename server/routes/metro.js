const rp = require('request-promise');
const metro_api_key = process.env.METRO_API_KEY || null;

module.exports = (req, res) => {
  if (!metro_api_key) {
    return res.status(400).send({ message: 'A metro api key is required.' });
  }

  if (!req.body.station) {
    return res
      .status(400)
      .send({ message: 'A metro station code is required.' });
  }

  // Make call to WMATA API
  const base_uri = 'https://api.wmata.com';
  const rail_uri = `${base_uri}/StationPrediction.svc/json/GetPrediction/${
    req.body.station
  }/?api_key=${metro_api_key}`;
  return rp(rail_uri).then(response =>
    res.status(200).send({
      message: 'Metro data retrieved',
      data: JSON.parse(response)
    })
  );
};
