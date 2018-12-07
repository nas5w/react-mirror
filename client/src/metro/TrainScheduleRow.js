import React from "react";
import PropTypes from "prop-types";
import "./Metro.css";

const TrainScheduleRow = props => {
  return (
    <tr className="Train-row">
      <td>
        {(props.line === "BL" ||
          props.line === "OR" ||
          props.line === "SV" ||
          props.line === "RD" ||
          props.line === "YL" ||
          props.line === "GR") && (
          <img
            alt={`${props.line} line`}
            className="Line-image"
            src={`./img/${props.line}.png`}
          />
        )}
      </td>
      <td>{props.destination}</td>
      <td>{props.min}</td>
    </tr>
  );
};

TrainScheduleRow.propTypes = {
  line: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired
};

export default TrainScheduleRow;
