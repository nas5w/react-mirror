import React, { Component } from 'react';
import Clock from './clock/Clock';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Left-sidebar">
          <Clock />
        </div>
        <div className="Right-sidebar">
          Right
        </div>
      </div>
    );
  }
}

export default App;
