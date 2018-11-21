import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrain } from '@fortawesome/free-solid-svg-icons';
import './Metro.css';

class Metro extends Component {
  render() {
    return (
      <div className="Metro">
        <div className="Train-icon">
          <FontAwesomeIcon icon={faTrain} />
        </div>
        <div className="clear"></div>
        <table className="Train-schedule">
          <tr className="Train-row">
            <td>GR</td>
            <td>6</td>
            <td>Brnch Av</td>
            <td>4</td>
          </tr>
          <tr className="Train-row">
            <td>GR</td>
            <td>6</td>
            <td>Other Station</td>
            <td>13</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Metro;
