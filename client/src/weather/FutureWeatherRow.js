import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ForecastIcon = styled.div`
  float: right;
  img {
    height: 30px;
    margin: -9px 0 0 5px;
  }
`;

const ForecastTemperature = styled.div`
  float: right;
  font-size: 14px;
`;

const Clear = styled.div`
  clear: both;
`;

const FutureWeatherRow = ({ icon, day, hi, low }) => {
  return (
    <div>
      <ForecastIcon>
        <img
          alt="Current Weather"
          src={`https://openweathermap.org/img/w/${icon}.png`}
        />
      </ForecastIcon>
      <ForecastTemperature>
        {day.toLocaleDateString()}: Hi {hi} / Low {low}
      </ForecastTemperature>
      <Clear />
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
