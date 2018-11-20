import React, { Component } from 'react';
import FutureWeatherRow from './FutureWeatherRow';
import './Weather.css';

class FutureWeather extends Component {
  render() {
    return (
      <div className="Future-weather">
        <FutureWeatherRow day="Tuesday" hi={56} low={41} icon="01d" />
        <FutureWeatherRow day="Wednesday" hi={49} low={36} icon="11d" />
        <FutureWeatherRow day="Thursday" hi={60} low={51} icon="04d" />
      </div>
    );
  }
}

export default FutureWeather;
