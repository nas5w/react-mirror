import React, { Component } from 'react';
import Clock from './clock/Clock';
import Weather from './weather/Weather';
import Metro from './metro/Metro';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
      metro: null
    }
  }

  componentDidMount() {
    this.getWeather();
    this.interval = setInterval(() => this.getWeather(), 600000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }  

  getWeather() {
    fetch('http://localhost:4000/weather', {
      method: 'post',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ zip: '20001' })
    }).then(response => {
      return response.json();
    }).then(response => {
      console.log(response);
      this.setState({
        weather: {
          current: { temperature: Math.round(response.data.current.main.temp), icon: response.data.current.weather[0].icon },
          forecast: response.data.forecast.map(forecast => {
            return { day: new Date(forecast.day), hi: Math.round(forecast.hi), low: Math.round(forecast.low), icon: forecast.icon }
          })
        }
      })
    });
  }

  render() {
    return (
      <div className="App">
        <div className="Left-sidebar">
          <Clock 
            timeZone='us-EN'
            dateOpts={{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }}
            timeOpts={{ hour: '2-digit', minute: '2-digit' }}
          />
        </div>
        <div className="Right-sidebar">
          <Weather weather={this.state.weather} />
          <Metro />
        </div>
      </div>
    );
  }
}

export default App;
