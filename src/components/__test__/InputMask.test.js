import React from 'react';
import Input from '../InputMask';
import { mount, shallow } from 'enzyme';

describe('Testing <InputMask />', () => {

  it('Expected to render', () => {

    const element = shallow(<Input />);

    expect(element).toBeDefined();
  });

  it('Expected to have an empty value', () => {

    const element = mount(<Input />);

    let input = element.find('[data-testid="creditCard"]');

    expect(input.props().value).toBe('');
  });


  it('Expected to change value to ************1111', () => {

    const element = mount(<Input />);

    const fakeChange = {
      target: {
        name: 'creditCard',
        value: '4111111111111111'
      }
    };

    let input = element.find('[data-testid="creditCard"]');

    expect(input.props().value).toBe('');

    input.simulate('change', fakeChange);

    input.simulate('blur');

    element.update();

    input = element.find('[data-testid="creditCard"]');

    expect(input.props().value).toBe('************1111');
  });
});
