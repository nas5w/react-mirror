import React from 'react';
import { shallow } from 'enzyme';
import TrainSchedule from '../../metro/TrainSchedule';
import TrainScheduleRow from '../../metro/TrainScheduleRow';

const metro = [{ Line: 'OR', Destination: 'NewCrltn', Min: '6' }];

it('renders without crashing', () => {
  const wrapper = shallow(<TrainSchedule metro={metro} />);
  expect(wrapper.text()).toContain('<TrainScheduleRow />');
  expect(wrapper.find(TrainScheduleRow)).toHaveLength(metro.length);
});
