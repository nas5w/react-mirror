import React from "react";
import PropTypes from "prop-types";
import "./Weather.css";

const CurrentWeather = props => {
  return (
    <div className="Current-weather">
      <div className="Current-icon">
        <img
          alt="Current Weather"
          src={`https://openweathermap.org/img/w/${props.current.icon}.png`}
        />
      </div>
      <div className="Current-temperature">
        {props.current.temperature}&deg;
      </div>
      <div className="clear" />
    </div>
  );
};

CurrentWeather.propTypes = {
  current: PropTypes.object.isRequired
};

export default CurrentWeather;
