import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Tells Enzyme that we are going to use React 16
configure({ adapter: new Adapter() });
