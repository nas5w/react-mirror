import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CurrentWeather from './CurrentWeather';
import FutureWeather from './FutureWeather';

const WeatherPanel = styled.div`
  margin-bottom: 20px;
`

const Weather = ({ weather }) => {
  return (
    <WeatherPanel>
      {weather && (
        <div>
          <CurrentWeather current={weather.current} />
          <FutureWeather forecast={weather.forecast} />
        </div>
      )}
    </WeatherPanel>
  );
};

Weather.propTypes = {
  weather: PropTypes.shape({}).isRequired,
};

export default Weather;
