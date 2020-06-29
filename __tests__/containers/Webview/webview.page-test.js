import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import Webview from '../../../src/containers/Webview/webview.page';

describe('Testing Webview Page', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <Webview/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});