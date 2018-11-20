import React, { Component } from 'react';
import './Weather.css';

class FutureWeatherRow extends Component {
  render() {
    return (
      <div className="Future-weather-row">
        <div className="Future-weather-icon">
          <img alt="Current Weather" src={`https://openweathermap.org/img/w/${this.props.icon}.png`} />
        </div>
        <div className="Future-weather-temp">
          {this.props.day}: Hi {this.props.hi} / Low {this.props.low}
        </div>
        <div class="clear"></div>
      </div>
    );
  }
}

export default FutureWeatherRow;
