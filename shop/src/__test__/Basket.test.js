import React from 'react';
import About from '../Components/About';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

//Enzyme
test('About changes the text after click', () => {
  // Render a About with label in the document
  const wrapper = shallow(
    <About></About>
  );

  expect(wrapper.text()).toEqual('Off');

  wrapper
    .find('input')
    .simulate('change');

  expect(wrapper.text()).toEqual('On');
});

//Jest - Snapshots
test('About changes the class when hovered', () => {
  const component = renderer.create(
    <About></About>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree
    .props
    .onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree
    .props
    .onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});