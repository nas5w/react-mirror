import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Clock from './clock/Clock';
import Weather from './weather/Weather';
import Metro from './metro/Metro';

const GlobalStyles = createGlobalStyle`
body {
  padding: 20px;
  background-color: #000;
  color: #fff;
  @import url('https://fonts.googleapis.com/css?family=Aldrich');
  font-family: 'Aldrich', sans-serif;
}
`;

const LeftSidebar = styled.div`
  float: left;
`;

const RightSidebar = styled.div`
  float: right;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateTime: new Date(),
      weather: null,
      metro: null,
    };
  }

  componentDidMount() {
    this.getWeather();
    this.getMetro();
    this.dateTimeInterval = setInterval(
      () => this.setState({ dateTime: new Date() }),
      1000,
    );
    this.weatherInterval = setInterval(() => this.getWeather(), 600000);
    this.metroInterval = setInterval(() => this.getMetro(), 30000);
  }

  componentWillUnmount() {
    clearInterval(this.dateTimeInterval);
    clearInterval(this.weatherInterval);
    clearInterval(this.metroInterval);
  }

  getWeather() {
    fetch('http://localhost:4000/weather', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ zip: '20001' }),
    })
      .then(response => {
        return response.json();
      })
      .then(({ data }) => {
        this.setState({
          weather: {
            current: {
              temperature: Math.round(data.current.main.temp),
              icon: data.current.weather[0].icon,
            },
            forecast: data.forecast.map(({ day, hi, low, icon }) => {
              return {
                day: new Date(day),
                hi: Math.round(hi),
                low: Math.round(low),
                icon,
              };
            }),
          },
        });
      });
  }

  getMetro() {
    fetch('http://localhost:4000/metro', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ station: 'C05' }),
    })
      .then(response => {
        return response.json();
      })
      .then(({ data: { Trains } }) => {
        this.setState({
          metro: Trains,
        });
      });
  }

  render() {
    const { dateTime, weather, metro } = this.state;
    return (
      <div className="App">
        <GlobalStyles />
        <LeftSidebar className="Left-sidebar">
          <Clock
            dateTime={dateTime}
            timeZone="us-EN"
            dateOpts={{
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }}
            timeOpts={{ hour: '2-digit', minute: '2-digit' }}
          />
        </LeftSidebar>
        <RightSidebar>
          {weather ? <Weather weather={weather} /> : <div>Loading...</div>}
          {metro ? <Metro metro={metro} /> : <div>Loading...</div>}
        </RightSidebar>
      </div>
    );
  }
}

export default App;
