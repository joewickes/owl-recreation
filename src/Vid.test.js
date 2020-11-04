import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Vid from './Vid';

describe('Vid Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Vid />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the Vid on stage', () => {
    const tree = renderer
      .create(<Vid name="On Stage" avatar={'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'} inSession={true} onStage={true} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders empty div if in session but not on stage', () => {
    const tree = renderer
      .create(<Vid name="In Session Only" avatar={'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'} inSession={true} onStage={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('renders empty div if not on stage or in session', () => {
    const tree = renderer
      .create(<Vid name="left" avatar={'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'} inSession={false} onStage={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});