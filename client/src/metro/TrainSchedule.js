import React from 'react';
import PropTypes from 'prop-types';
import TrainScheduleRow from './TrainScheduleRow';
import './Metro.css';

const TrainSchedule = ({ metro }) => {
  return (
    <table className="Train-schedule">
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
    </table>
  );
};

TrainSchedule.propTypes = {
  metro: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default TrainSchedule;
