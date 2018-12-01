import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrain } from "@fortawesome/free-solid-svg-icons";
import "./Metro.css";

const Metro = props => {
  return (
    <div className="Metro">
      <div className="Train-icon">
        <FontAwesomeIcon icon={faTrain} />
      </div>
      <div className="clear" />
      <table className="Train-schedule">
        <tbody>
          {props.metro &&
            props.metro.map((train, key) => {
              return (
                <tr key={key} className="Train-row">
                  <td>
                    {(train.Line === "BL" ||
                      train.Line === "OR" ||
                      train.Line === "SV" ||
                      train.Line === "RD" ||
                      train.Line === "YL" ||
                      train.Line === "GR") && (
                      <img
                        alt={`${train.Line} line`}
                        className="Line-image"
                        src={`./img/${train.Line}.png`}
                      />
                    )}
                  </td>
                  <td>{train.Destination}</td>
                  <td>{train.Min}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Metro;
