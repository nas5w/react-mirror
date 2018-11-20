import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import FutureWeather from './FutureWeather';
import './Weather.css';

class Weather extends Component {
  render() {
    return (
      <div className="Weather">
        <CurrentWeather current={this.props.weather.current} />
        <FutureWeather forecast={this.props.weather.forecast} />
      </div>
    );
  }
}

export default Weather;
