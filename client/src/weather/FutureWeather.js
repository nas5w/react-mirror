import React from 'react';
import PropTypes from 'prop-types';
import FutureWeatherRow from './FutureWeatherRow';
import './Weather.css';

const FutureWeather = ({ forecast }) => {
  return (
    <div className="Future-weather">
      {forecast.map(({ day, hi, low, icon }, key) => {
        return (
          <FutureWeatherRow key={key} day={day} hi={hi} low={low} icon={icon} />
        );
      })}
    </div>
  );
};

FutureWeather.propTypes = {
  forecast: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default FutureWeather;
