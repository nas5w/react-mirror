import React from "react";
import PropTypes from "prop-types";
import TrainScheduleRow from "./TrainScheduleRow";
import "./Metro.css";

const TrainSchedule = props => {
  return (
    <table className="Train-schedule">
      <tbody>
        {props.metro &&
          props.metro.map((train, key) => {
            return (
              <TrainScheduleRow
                key={key}
                line={train.Line}
                destination={train.Destination}
                min={train.Min}
              />
            );
          })}
      </tbody>
    </table>
  );
};

TrainSchedule.propTypes = {
  metro: PropTypes.object.isRequired
};

export default TrainSchedule;
