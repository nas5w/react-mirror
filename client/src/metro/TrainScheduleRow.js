import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TrainRow = styled.tr`
  td {
    padding: 2px 0 2px 7px;
  }
`;

const LineImage = styled.img`
  height: 22px;
`

const TrainScheduleRow = ({ line, destination, min }) => {
  return (
    <TrainRow>
      <td>
        {(line === 'BL' ||
          line === 'OR' ||
          line === 'SV' ||
          line === 'RD' ||
          line === 'YL' ||
          line === 'GR') && (
          <LineImage
            alt={`${line} line`}
            src={`./img/${line}.png`}
          />
        )}
      </td>
      <td>{destination}</td>
      <td>{min}</td>
    </TrainRow>
  );
};

TrainScheduleRow.propTypes = {
  line: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
};

export default TrainScheduleRow;
