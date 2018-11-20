import React, { Component } from 'react';

class Weather extends Component {
  render() {
    return (
      <div className="Weather">
        <div class="Current-weather">
        50&deg;
        <img src="https://openweathermap.org/img/w/01n.png" />
        </div>
      </div>
    );
  }
}

export default Weather;
