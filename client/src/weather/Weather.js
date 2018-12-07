import React from "react";
import PropTypes from "prop-types";
import CurrentWeather from "./CurrentWeather";
import FutureWeather from "./FutureWeather";
import "./Weather.css";

const Weather = props => {
  return (
    <div className="Weather">
      {props.weather && (
        <div>
          <CurrentWeather current={props.weather.current} />
          <FutureWeather forecast={props.weather.forecast} />
        </div>
      )}
    </div>
  );
};

Weather.propTypes = {
  weather: PropTypes.object.isRequired
};

export default Weather;
