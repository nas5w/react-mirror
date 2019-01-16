import React from 'react';
import PropTypes from 'prop-types';
import './Metro.css';

const TrainScheduleRow = ({ line, destination, min }) => {
  return (
    <tr className="Train-row">
      <td>
        {(line === 'BL' ||
          line === 'OR' ||
          line === 'SV' ||
          line === 'RD' ||
          line === 'YL' ||
          line === 'GR') && (
          <img
            alt={`${line} line`}
            className="Line-image"
            src={`./img/${line}.png`}
          />
        )}
      </td>
      <td>{destination}</td>
      <td>{min}</td>
    </tr>
  );
};

TrainScheduleRow.propTypes = {
  line: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
};

export default TrainScheduleRow;
