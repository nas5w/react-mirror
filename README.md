# React Magic Mirror
This repository contains the front- and back-end code for a React-based Magic Mirror Application. If you don't know what a magic mirror is, take a look at [this site](https://www.raspberrypi.org/blog/magic-mirror/).

## Architecture
The application is composed of two main directories: `server` and `client`. The `server` directory contains a simple Node/Express application that hits the [OpenWeatherMap API](https://openweathermap.org/api) for weather data and the [WMATA API](https://developer.wmata.com/docs/services/) for metro data. To make this application work as-is, you'll need to get (free) API keys from both sources.

The `client` directory is a React application that uses `fetch` to periodicially retrieve data from the node server.  

## Configuration
To configure the application, first install all client and server dependencies:

```
cd client
npm i
cd ../server
npm i
```

Next, create a `config.js` file in the `server` directory and export an object with your API keys:

```javascript
module.exports = {
	metro_api_key: '...',
	weather_api_key: '...'
}
``` 

## Using the Application
To use the application, you can simply use node to start both the server and React app:

server:
```
cd server
node .
```

React application:
```
cd client
npm start
```

Navigate to `http://localhost:3000` and you'll see your mirror application in all its glory!

![Magic Mirror Application](https://i.imgur.com/oqDHOIJ.png)

## To-Do List
There is some refactoring that would make this application stronger.

* Split the front-end metro component into multiple components.
* Make the metro line icon `require` statement more robust to error values. 