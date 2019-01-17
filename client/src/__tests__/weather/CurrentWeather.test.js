import React from 'react';
import { shallow } from 'enzyme';
import CurrentWeather from '../../weather/CurrentWeather';

const weather = {
  current: {
    icon: '50n',
    temperature: 20,
  },
  forecast: [{ day: new Date(), hi: 42, low: 12, icon: '01n' }],
};

it('renders without crashing', () => {
  const wrapper = shallow(<CurrentWeather current={weather.current} />);
  expect(wrapper.text()).toContain(weather.current.temperature);
});
