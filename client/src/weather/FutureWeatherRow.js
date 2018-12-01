import React from "react";
import "./Weather.css";

const FutureWeatherRow = props => {
  return (
    <div className="Future-weather-row">
      <div className="Future-weather-icon">
        <img
          alt="Current Weather"
          src={`https://openweathermap.org/img/w/${props.icon}.png`}
        />
      </div>
      <div className="Future-weather-temp">
        {props.day.toLocaleDateString()}: Hi {props.hi} / Low {props.low}
      </div>
      <div className="clear" />
    </div>
  );
};

export default FutureWeatherRow;
