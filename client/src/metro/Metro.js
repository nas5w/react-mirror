import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrain } from "@fortawesome/free-solid-svg-icons";
import TrainSchedule from "./TrainSchedule";
import "./Metro.css";

const Metro = props => {
  return (
    <div className="Metro">
      <div className="Train-icon">
        <FontAwesomeIcon icon={faTrain} />
      </div>
      <div className="clear" />
      {props.metro && <TrainSchedule metro={props.metro} />}
    </div>
  );
};

export default Metro;
