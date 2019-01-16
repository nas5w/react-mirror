import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TrainScheduleRow from './TrainScheduleRow';

const Schedule = styled.table`
  float: right;
  text-align: right;
`;

const TrainSchedule = ({ metro }) => {
  return (
    <Schedule>
      <tbody>
        {metro &&
          metro.map(({ Line, Destination, Min }, key) => {
            return (
              <TrainScheduleRow
                key={key}
                line={Line}
                destination={Destination}
                min={Min}
              />
            );
          })}
      </tbody>
    </Schedule>
  );
};

TrainSchedule.propTypes = {
  metro: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default TrainSchedule;
