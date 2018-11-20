import React, { Component } from 'react';
import Clock from './clock/Clock';
import Weather from './weather/Weather';
import './App.css';

class App extends Component {
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
          <Weather />
        </div>
      </div>
    );
  }
}

export default App;
