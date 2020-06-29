import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import Scheduler from '../../../src/containers/Scheduler/scheduler.page';

describe('Testing Scheduler page', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <Scheduler/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});