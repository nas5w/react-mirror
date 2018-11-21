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
          <tbody>
            {
              this.props.metro &&
              this.props.metro.map((train, key) => {
                return <tr key={key} className="Train-row">
                  <td><img alt={`${train.Line} line`} className="Line-image" src={require(`./${train.Line}.png`)} /></td>
                  <td>{train.Destination}</td>
                  <td>{train.Min}</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Metro;
