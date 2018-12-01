import React from "react";
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

export default CurrentWeather;
