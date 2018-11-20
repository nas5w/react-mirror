import React, { Component } from 'react';
import './Weather.css';

class CurrentWeather extends Component {
  render() {
    return (
      <div class="Current-weather">
        <div class="Current-icon">
          <img alt="Current Weather" src={`https://openweathermap.org/img/w/${this.props.icon}.png`} />
        </div>
        <div class="Current-temperature">
          {this.props.temperature}&deg;
        </div>
      </div>
    );
  }
}

export default CurrentWeather;
