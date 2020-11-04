import { render } from '@testing-library/react';
import React from 'react';
import './Vid.css';

class Vid extends React.Component {
  static defaultProps = {
    name: '',
    avatar: '',
    onStage: false
  };

  render() {
    const {name, avatar, onStage} = this.props;

    let vidDisplay = null;
    // if on stage, show them, else, don't
    if (onStage) {
      vidDisplay = (
        <div className="Vid">
          <div className="Vid-box">
            <div className="Vid-box-back">
              <p className="Vid-box-name">{name}</p>
              <div className="Vid-box-line"></div>
              <div className="Vid-box-icons">
                <p>Mic</p>
                <p>Mag</p>
              </div>
            </div>
          </div>
          <div className="Vid-display">
            <img src={avatar} alt={`${name}'s Avatar`} />
          </div>
        </div>
      );
    }

    return (
      vidDisplay
    );
  };
}

export default Vid;