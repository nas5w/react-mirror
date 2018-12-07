import React from "react";
import PropTypes from "prop-types";
import FutureWeatherRow from "./FutureWeatherRow";
import "./Weather.css";

const FutureWeather = props => {
  return (
    <div className="Future-weather">
      {props.forecast.map((forecast, key) => {
        return (
          <FutureWeatherRow
            key={key}
            day={forecast.day}
            hi={forecast.hi}
            low={forecast.low}
            icon={forecast.icon}
          />
        );
      })}
    </div>
  );
};

FutureWeather.propTypes = {
  weather: PropTypes.object.isRequired
};

export default FutureWeather;
