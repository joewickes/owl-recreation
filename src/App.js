import Participant from './Participant';
import Vid from './Vid';
import Chat from './Chat';
import participantList from './participantList';
import chatE from './chatEvents';
import './App.css';

function App() {
  participantList.sort((a, b) => (a.inSession && !b.inSession) ? -1 : 1);
  participantList.sort((a, b) => (a.onStage && !b.onStage) ? -1 : 1);

  chatE.sort((a, b) => (a.timestamp > b.timestamp) ? 1 : -1);

  return (
    <div className="App">
      <div className="top">
        <div className="left">
          <header>
          </header>
          <section className="Participant-list">
            {participantList.map(part => <Participant key={part.id} name={part.name} avatar={part.avatar} inSession={part.inSession} onStage={part.onStage} />)}
          </section>
          <section className="Chat-log">
            {chatE.map(log => <Chat key={`${log.type}_${log.participantId}`} name={participantList.find(part => log.participantId === part.id).name} avatar={participantList.find(part => log.participantId === part.id).avatar} type={log.type} message={log.message} time={log.time} />)}

          </section>
        </div>
        <div className="Vid-group">
          {participantList.map(part => <Vid key={part.id} name={part.name} avatar={part.avatar} onStage={part.onStage} />)}
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-left">
          <button className="back">Back</button>
          <button className="reaction">R1</button>
          <button className="reaction">R2</button>
          <button className="reaction">R3</button>
          <button className="reaction">R4</button>
        </div>
        <div className="bottom-right">
          <button className="action">Cam</button>
          <button className="action">Mic</button>
          <button className="action">SSh</button>
          <button className="leave">Leave</button>
        </div>
      </div>
    </div>
  );
}

export default App;