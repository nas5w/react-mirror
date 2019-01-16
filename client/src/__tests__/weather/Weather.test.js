import React from 'react';
import { shallow } from 'enzyme';
import Weather from '../../weather/Weather';

const weather = {
  current: {
    icon: '50n',
    temperature: 20,
  },
  forecast: [{ day: '16/01/2019', hi: 42, low: 12, icon: '01n' }],
};

it('renders without crashing', () => {
  const wrapper = shallow(<Weather weather={weather} />);
  expect(wrapper.text()).toContain('<CurrentWeather />');
  expect(wrapper.text()).toContain('<FutureWeather />');
});
