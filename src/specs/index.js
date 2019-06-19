/* eslint-disable */
import polyfill from './polyfille';
import Enzyme from 'enzyme';
import Adapter from 'enzymer-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });