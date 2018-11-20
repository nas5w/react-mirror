import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import './Clock.css';

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
      <div className="Clock-container">
        <div className="Clock-icon">
          <FontAwesomeIcon icon={faClock} />&nbsp;
        </div>
        <div className="Date-time">
          { this.state.dateTime.toLocaleDateString(this.props.timeZone, this.props.dateOpts) }<br />
          { this.state.dateTime.toLocaleTimeString(this.props.timeZone, this.props.timeOpts) }
        </div>
      </div>
    );
  }
}

export default Clock;
