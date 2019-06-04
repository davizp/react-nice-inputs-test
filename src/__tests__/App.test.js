import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('should match snapshot', () => {
	const tree = renderer.create(<App />).toJSON();

	expect(tree).toMatchSnapshot();
});
