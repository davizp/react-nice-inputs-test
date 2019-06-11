import React from 'react';
import Input from '../Input';
import { mount, shallow } from 'enzyme';

describe('Testing <Input />', () => {

  it('Expected to render', () => {

    const element = shallow(<Input />);

    expect(element).toBeDefined();
  });

  it('Expected to have an empty value', () => {

    const element = mount(<Input />);

    let input = element.find('input');

    expect(input.props().value).toBe('');
  });


  it('Expected to change value to Hernandez', () => {

    const element = mount(<Input />);

    const fakeChange = {
      target: {
        name: 'firstName',
        value: 'Hernandez'
      }
    };

    let input = element.find('input');

    expect(input.props().value).toBe('');

    input.simulate('change', fakeChange);

    element.update();

    input = element.find('input');

    expect(input.props().value).toBe('Hernandez');
  });
});
