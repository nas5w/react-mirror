import React from 'react';
import { shallow } from 'enzyme';
import Clock from '../../clock/Clock';

const dateOpts = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const timeOpts = { hour: '2-digit', minute: '2-digit' };

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

it('renders without crashing', () => {
  const wrapper = shallow(
    <Clock
      dateTime={new Date()}
      timeZone="us-EN"
      dateOpts={dateOpts}
      timeOpts={timeOpts}
    />,
  );
  expect(wrapper.text()).toContain('<FontAwesomeIcon />');
  expect(wrapper.text()).toContain(days[new Date().getDay()]);
  expect(wrapper.text()).toContain(months[new Date().getMonth()]);
});
