import React from 'react';
import PropTypes from 'prop-types';
import CurrentWeather from './CurrentWeather';
import FutureWeather from './FutureWeather';
import './Weather.css';

const Weather = ({ weather }) => {
  return (
    <div className="Weather">
      {weather && (
        <div>
          <CurrentWeather current={weather.current} />
          <FutureWeather forecast={weather.forecast} />
        </div>
      )}
    </div>
  );
};

Weather.propTypes = {
  weather: PropTypes.shape({}).isRequired,
};

export default Weather;
