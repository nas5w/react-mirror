import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrain } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import TrainSchedule from './TrainSchedule';

const Clear = styled.div`
  clear: both;
`;

const TrainIcon = styled.div`
  float: right;
  font-size: 30px;
  margin-bottom: 10px;
`;

const Metro = ({ metro }) => {
  return (
    <div>
      <TrainIcon>
        <FontAwesomeIcon icon={faTrain} />
      </TrainIcon>
      <Clear />
      {metro && <TrainSchedule metro={metro} />}
    </div>
  );
};

Metro.propTypes = {
  metro: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Metro;
