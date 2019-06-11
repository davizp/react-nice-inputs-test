import React from 'react';
import Select from '../Select';
import { mount, shallow } from 'enzyme';

describe('Testing <Select />', () => {

  it('Expected to render', () => {

    const element = shallow(<Select />);

    expect(element).toBeDefined();
  });

  it('Expected to have an empty value', () => {

    const element = mount(<Select />);

    let select = element.find('select');

    expect(select.props().value).toBe('');
  });


  it('Expected to change value to hn', () => {

    const element = mount(<Select />);

    const fakeChange = {
      target: {
        name: 'countries',
        value: 'hn'
      }
    };

    let input = element.find('select');

    expect(input.props().value).toBe('');

    input.simulate('change', fakeChange);

    element.update();

    input = element.find('select');

    expect(input.props().value).toBe('hn');
  });
});
