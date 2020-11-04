import React from 'react';
import './Chat.css';

class Chat extends React.Component {
  static defaultProps = {
    name: '',
    type: '',
    message: '',
    avatar: '',
    time: 0,
    timestamp: 0,
  };
  
  render() {
    const {name, type, message, avatar, time} = this.props;

    let displayText = null;

    const postTime = new Date(time);
    const hours = postTime.getHours();
    const minutes = postTime.getMinutes();

    if (type === 'join') {
      // Name joined
      displayText = <p className="display-text"><b>{name}</b> joined</p>;
    } else if (type === 'leave') {
      // Name left
      displayText = <p className="display-text"><b>{name}</b> left</p>;
    } else if (type === 'join-stage') {
      // Name joined the stage
      displayText = <p className="display-text"><b>{name}</b> joined the stage</p>;
    } else if (type === 'leave-stage') {
      // Name left the stage
      displayText = <p className="display-text"><b>{name}</b> left the stage</p>;
    } else if (type === 'clap') {
      // Name clapped
      displayText = <p className="display-text"><b>{name}</b> clapped</p>;
    } else if (type === 'raise-hand') {
      // Name raised their hand
      displayText = <p className="display-text"><b>{name}</b> raised their hand</p>;
    } else if (type === 'thumbs-up') {
      // Name gave a thumbs up
      displayText = <p className="display-text"><b>{name}</b> gave a thumbs up</p>;
    } else if (type === 'thumbs-down') {
      // Name gave a thumbs down
      displayText = <p className="display-text"><b>{name}</b> gave a thumbs down</p>;
    } else if (type === 'message') {
      // Icon, name, time?, and message under name
      displayText = (
        <div className="display-message">
          <div className="message-left">
            <img src={avatar} alt={`${name}'s Avatar`} />
          </div>
          <div className="message-right">
            <div className="message-heading">
              <p className="participant-name">{name}</p>
              <p>{`${hours}:${minutes}`}</p>
            </div>
            <p>{message}</p>
          </div>
        </div> 
      );
    }

    return (
      <div className="Chat">
        {displayText}
      </div>
    );
  }
}

export default Chat;