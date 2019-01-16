import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Clear = styled.div`
  clear: both;
`;

const Temperature = styled.div`
  font-size: 35px;
  float: right;
`;

const CurrentIcon = styled.div`
  float: right;
  margin-top: -10px;
`;

const CurrentWeather = ({ current: { icon, temperature } }) => {
  return (
    <div>
      <CurrentIcon>
        <img
          alt="Current Weather"
          src={`https://openweathermap.org/img/w/${icon}.png`}
        />
      </CurrentIcon>
      <Temperature>{temperature}&deg;</Temperature>
      <Clear />
    </div>
  );
};

CurrentWeather.propTypes = {
  current: PropTypes.shape({}).isRequired,
};

export default CurrentWeather;
