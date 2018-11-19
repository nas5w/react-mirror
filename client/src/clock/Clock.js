import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { dateTime: new Date() }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ dateTime: new Date }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="Clock">
        { this.state.dateTime.toLocaleDateString() }<br />
        { this.state.dateTime.toLocaleTimeString() }
      </div>
    );
  }
}

export default Clock;
