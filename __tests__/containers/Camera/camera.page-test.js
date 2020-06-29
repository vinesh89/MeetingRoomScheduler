import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import Camera from '../../../src/containers/Camera/camera.page';

describe('Testing Camera page', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <Camera/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});