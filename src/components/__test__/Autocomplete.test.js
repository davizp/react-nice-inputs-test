import React from 'react';
import Autocomplete from '../Autocomplete';
import { mount, shallow } from 'enzyme';

describe('testing Autocomplete component', () => {

  it('Expected to render', () => {

    const element = shallow(<Autocomplete />);

    expect(element).toBeDefined();
  });


  it('Expected to have an array of elements', () => {

    const element = mount(<Autocomplete />);

    let input = element.find('Autocomplete');

    expect(input.props().dataList).toHaveLength(3);
  });
})
