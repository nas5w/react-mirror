import React from 'react';
import { shallow } from 'enzyme';
import Metro from '../../metro/Metro';

const metro = [{ Line: 'OR', Destination: 'NewCrltn', Min: '6' }];

it('renders without crashing', () => {
  const wrapper = shallow(<Metro metro={metro} />);
  expect(wrapper.text()).toContain('<FontAwesomeIcon />');
  expect(wrapper.text()).toContain('<TrainSchedule />');
});
