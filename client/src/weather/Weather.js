import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import FutureWeather from './FutureWeather';
import './Weather.css';

class Weather extends Component {
  render() {
    return (
      <div className="Weather">
        <CurrentWeather temperature={50} icon="10d" />
        <div className="clear"></div>
        <FutureWeather temperature={50} icon="10d" />
      </div>
    );
  }
}

export default Weather;
