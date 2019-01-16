import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import './Clock.css';

const Clock = ({ dateTime, timeZone, dateOpts, timeOpts }) => {
  return (
    <div className="Clock-container">
      <div className="Clock-icon">
        <FontAwesomeIcon icon={faClock} />
        &nbsp;
      </div>
      <div className="Date-time">
        {dateTime.toLocaleDateString(timeZone, dateOpts)}
        <br />
        {dateTime.toLocaleTimeString(timeZone, timeOpts)}
      </div>
    </div>
  );
};

Clock.propTypes = {
  dateTime: PropTypes.instanceOf(Date).isRequired,
  timeZone: PropTypes.string.isRequired,
  dateOpts: PropTypes.shape({}).isRequired,
  timeOpts: PropTypes.shape({}).isRequired,
};

export default Clock;
