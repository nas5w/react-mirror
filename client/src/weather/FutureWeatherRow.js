import React from 'react';
import PropTypes from 'prop-types';
import './Weather.css';

const FutureWeatherRow = ({ icon, day, hi, low }) => {
  return (
    <div className="Future-weather-row">
      <div className="Future-weather-icon">
        <img
          alt="Current Weather"
          src={`https://openweathermap.org/img/w/${icon}.png`}
        />
      </div>
      <div className="Future-weather-temp">
        {day.toLocaleDateString()}: Hi {hi} / Low {low}
      </div>
      <div className="clear" />
    </div>
  );
};

FutureWeatherRow.propTypes = {
  icon: PropTypes.string.isRequired,
  day: PropTypes.instanceOf(Date).isRequired,
  hi: PropTypes.number.isRequired,
  low: PropTypes.number.isRequired,
};

export default FutureWeatherRow;
