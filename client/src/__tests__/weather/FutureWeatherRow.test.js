import React from 'react';
import { shallow } from 'enzyme';
import FutureWeatherRow from '../../weather/FutureWeatherRow';

const { day, hi, low, icon } = {
  day: new Date(),
  hi: 42,
  low: 12,
  icon: '01n',
};

(new Date).toLocaleDateString()

it('renders without crashing', () => {
  const wrapper = shallow(<FutureWeatherRow day={day} hi={hi} low={low} icon={icon} />);
  expect(wrapper.text()).toContain(day.toLocaleDateString());
  expect(wrapper.text()).toContain(hi);
  expect(wrapper.text()).toContain(low);
});
