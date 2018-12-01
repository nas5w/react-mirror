import React from "react";
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

export default Weather;
