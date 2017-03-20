import React from 'react';
import Home from '../Components/Home';
import {shallow} from 'enzyme';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';

const mockStore = configureStore();
const dispatch = sinon.spy();

it('renders without crashing', () => {
  const div = document.createElement('div');
  const wrapper = shallow(
    <Home dispatch={dispatch} store={mockStore({runtime: {}})} testData=""/>, div);

  expect(wrapper.find('div').length).toBe(0);

});
