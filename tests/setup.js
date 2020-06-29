import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { NativeModules } from 'react-native';

NativeModules.RNCNetInfo = {
    getCurrentState: jest.fn(() => Promise.resolve()),
    addListener: jest.fn(),
    removeListeners: jest.fn()
};

Enzyme.configure({adapter: new Adapter()});