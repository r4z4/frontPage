import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App, { Button } from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
    it('renders without crasing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

test('has a valid snapshot', () => {
  const component = renderer.create(
    <App />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

}); /* end describe App */

describe('Button', () => {
  it('renders without crasing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button>{value}</Button>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

test('has a valid snapshot', () => {
const component = renderer.create(
  <Button>{value}</Button>
);
const tree = component.toJSON();
expect(tree).toMatchSnapshot();
});

});