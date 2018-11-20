import React, { Component } from 'react';
import FutureWeatherRow from './FutureWeatherRow';
import './Weather.css';

class FutureWeather extends Component {
  render() {
    return (
      <div className="Future-weather">
        {this.props.forecast.map((forecast, key) => {
          return <FutureWeatherRow key={key} day={forecast.day} hi={forecast.hi} low={forecast.low} icon={forecast.icon} />;
        })}
      </div>
    );
  }
}

export default FutureWeather;
