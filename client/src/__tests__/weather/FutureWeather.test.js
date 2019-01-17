import React from 'react';
import { shallow } from 'enzyme';
import FutureWeather from '../../weather/FutureWeather';
import FutureWeatherRow from '../../weather/FutureWeatherRow';

const weather = {
  current: {
    icon: '50n',
    temperature: 20,
  },
  forecast: [{ day: new Date(), hi: 42, low: 12, icon: '01n' }],
};

it('renders without crashing', () => {
  const wrapper = shallow(<FutureWeather forecast={weather.forecast} />);
  expect(wrapper.text()).toContain('<FutureWeatherRow />');
  expect(wrapper.find(FutureWeatherRow)).toHaveLength(weather.forecast.length);
});
