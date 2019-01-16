const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();
const weather = require('./routes/weather');
const metro = require('./routes/metro');

process.title = 'app-server';

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/weather', weather);
app.post('/metro', metro);

app.listen(4000, () => {
  /*eslint no-console: "off"*/
  console.log('Listening on port 4000');
});
