import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Participant from './Participant';

describe('Participant Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Participant />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the Participant on stage', () => {
    const tree = renderer
      .create(<Participant name="On Stage" avatar={'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'} inSession={true} onStage={true} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Participant in session', () => {
    const tree = renderer
      .create(<Participant name="In Session" avatar={'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'} inSession={true} onStage={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Participant having left', () => {
    const tree = renderer
      .create(<Participant name="They Left" avatar={'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'} inSession={false} onStage={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});