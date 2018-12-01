import React from "react";
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

export default TrainScheduleRow;
