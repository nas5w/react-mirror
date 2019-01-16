import React from 'react';
import PropTypes from 'prop-types';
import './Weather.css';

const CurrentWeather = ({ current: {icon, temperature} }) => {
  return (
    <div className="Current-weather">
      <div className="Current-icon">
        <img
          alt="Current Weather"
          src={`https://openweathermap.org/img/w/${icon}.png`}
        />
      </div>
      <div className="temperature">{temperature}&deg;</div>
      <div className="clear" />
    </div>
  );
};

CurrentWeather.propTypes = {
  current: PropTypes.shape({}).isRequired,
};

export default CurrentWeather;
