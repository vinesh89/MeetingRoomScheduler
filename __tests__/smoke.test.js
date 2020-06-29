import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';

describe("Smoke Test", () => {
    it('Renders Test', () => {
        const wrapper = shallow(<Text>Smoke Test!!</Text>);
        expect(wrapper.text()).toEqual("Smoke Test!!");
    });
});
