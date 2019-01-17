import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const ClockIcon = styled.div`
  float: left;
  font-size: 30px;
`

const DateTime = styled.div`
  float: left;
  font-size: 16px;
`

const Clock = ({ dateTime, timeZone, dateOpts, timeOpts }) => {
  return (
    <div>
      <ClockIcon>
        <FontAwesomeIcon icon={faClock} />
        &nbsp;
      </ClockIcon>
      <DateTime>
        {dateTime.toLocaleDateString(timeZone, dateOpts)}
        <br />
        {dateTime.toLocaleTimeString(timeZone, timeOpts)}
      </DateTime>
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
