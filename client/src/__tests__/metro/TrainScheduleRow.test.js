import React from 'react';
import { shallow } from 'enzyme';
import TrainScheduleRow from '../../metro/TrainScheduleRow';

const { Line, Destination, Min } = { Line: 'OR', Destination: 'NewCrltn', Min: '6' };

it('renders without crashing', () => {
  const wrapper = shallow(<TrainScheduleRow line={Line} destination={Destination} min={Min} />);
  expect(wrapper.text()).toContain(Destination);
  expect(wrapper.text()).toContain(Min);
});
