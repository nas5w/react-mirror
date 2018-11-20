import React, { Component } from 'react';
import './Weather.css';

class CurrentWeather extends Component {
  render() {
    return (
      <div className="Current-weather">
        <div className="Current-icon">
          <img alt="Current Weather" src={`https://openweathermap.org/img/w/${this.props.current.icon}.png`} />
        </div>
        <div className="Current-temperature">
          {this.props.current.temperature}&deg;
        </div>
        <div className="clear"></div>
      </div>
    );
  }
}

export default CurrentWeather;
