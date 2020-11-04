import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Chat from './Chat';

describe('Chat Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Chat />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a message', () => {
    const tree = renderer
      .create(<Chat name="Bob" type="message" message="Hey , I'm here" avatar="https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1" time={1548852646559} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a join', () => {
    const tree = renderer
      .create(<Chat name="Sally" type="join" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a leave', () => {
    const tree = renderer
      .create(<Chat name="Sally" type="leave" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a join stage', () => {
    const tree = renderer
      .create(<Chat name="Sally" type="join-stage" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a leave stage', () => {
    const tree = renderer
      .create(<Chat name="Sally" type="leave-stage" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a thumbs up', () => {
    const tree = renderer
      .create(<Chat name="Sally" type="thumbs-up" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a thumbs down', () => {
    const tree = renderer
      .create(<Chat name="Sally" type="thumbs-down" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a raised hand', () => {
    const tree = renderer
      .create(<Chat name="Sally" type="raised-hand" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a clap', () => {
    const tree = renderer
      .create(<Chat name="Sally" type="clap" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});