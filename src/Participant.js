import React from 'react';
import './Participant.css';

class Participant extends React.Component {
  static defaultProps = {
    name: '',
    avatar: '',
    inSession: false,
    onStage: false
  }

  render() {
    const {name, avatar, inSession, onStage} = this.props;

    let sessionStatus = null;
    
    if (onStage) {
      // Show green light and 'on stage'
      sessionStatus = (
        <div className="session-status">
          <div className="session-green">
            <p></p>
          </div>
          <p>on stage</p>
        </div>
      );
    } else if (inSession) {
      // Show green light and 'in session'
      sessionStatus = (
        <div className="session-status">
          <div className="session-green">
            <p></p>
          </div>
          <p>in session</p>
        </div>
      );
    } else if (!inSession) {
      sessionStatus = (
        <div className="session-status">
          <div className="session-red">
            <p></p>
          </div>
          <p>left</p>
        </div>
      );
    }

    return (
      <div className="Participant">
        <div className="participant-left">
          <img src={avatar} alt={`${name}'s Avatar`} />
        </div>
        <div className="participant-right">
          <p className="participant-name">{name}</p>
          {sessionStatus}
        </div>
      </div>
    );
  }
  
}

export default Participant;