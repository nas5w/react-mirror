const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const app = express();
const router = express.Router();
const weather = require('./routes/weather');
const metro = require('./routes/metro');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/weather', weather);
app.post('/metro', metro);

app.listen(3000, () => {
	console.log('Listening on port 3000');
});