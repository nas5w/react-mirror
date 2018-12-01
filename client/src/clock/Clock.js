import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import "./Clock.css";

const Clock = props => {
  return (
    <div className="Clock-container">
      <div className="Clock-icon">
        <FontAwesomeIcon icon={faClock} />
        &nbsp;
      </div>
      <div className="Date-time">
        {props.dateTime.toLocaleDateString(props.timeZone, props.dateOpts)}
        <br />
        {props.dateTime.toLocaleTimeString(props.timeZone, props.timeOpts)}
      </div>
    </div>
  );
};

export default Clock;
