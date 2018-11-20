import React, { Component } from 'react';
import Clock from './clock/Clock';
import Weather from './weather/Weather';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {
        current: { temperature: 'TBD', icon: '01d' },
        forecast: [{ day: 'Tuesday', hi: 59, low: 43, icon: '10d' }]
      },
      metro: null
    }
  }

  componentDidMount() {

    fetch('http://localhost:4000/weather', {
      method: 'post',
      body: JSON.stringify({ zip: '20001' })
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data);
    });


    this.interval = setInterval(() => {
      this.setState({
        weather: this.getWeather()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }  

  getWeather() {
    return {
      current: { temperature: 50, icon: '10d' },
      forecast: [
        { day: 'Tuesday', hi: 59, low: 43, icon: '10d' },
        { day: 'Wednesday', hi: 54, low: 40, icon: '10d' },
        { day: 'Thursday', hi: 62, low: 50, icon: '10d' }
      ]
    };
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
        </div>
      </div>
    );
  }
}

export default App;
