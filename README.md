# React Magic Mirror

[![Build Status](https://travis-ci.com/nas5w/react-mirror.svg?branch=master)](https://travis-ci.com/nas5w/react-mirror)

This repository contains the front- and back-end code for a React-based Magic Mirror Application. If you don't know what a magic mirror is, take a look at [this site](https://www.raspberrypi.org/blog/magic-mirror/).

## Architecture

The application is composed of two main directories: `server` and `client`. The `server` directory contains a simple Node/Express application that hits the [OpenWeatherMap API](https://openweathermap.org/api) for weather data and the [WMATA API](https://developer.wmata.com/docs/services/) for metro data. To make this application work as-is, you'll need to get (free) API keys from both sources.

The `client` directory is a React application that uses `fetch` to periodicially retrieve data from the node server.

## Configuration

To configure the application, first install all client and server dependencies:

```bash
cd client
npm i
cd ../server
npm i
```

Next, set node environment variables in the `server` and `client` directory for your API keys and settings:

```bash
cp .env.sample .env
```

## Using the Application

To use the application, you can simply use node to start both the server and React app:

server:

```bash
cd server
npm start
```

React application:

```bash
cd client
npm start
```

Navigate to `http://localhost:3000` and you'll see your mirror application in all its glory!

![Magic Mirror Application](https://i.imgur.com/oqDHOIJ.png)
