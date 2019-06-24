import React from 'react';
import InputGroup from '../InputGroupCheckbox';
import { mount, shallow } from 'enzyme';

describe('Testing <InputGroup /> ', () => {

  it('Expected to render', () => {

    const element = shallow(<InputGroup />);

    expect(element).toBeDefined();
  });


  it('Expected to have an empty value', () => {

    const element = mount(<InputGroup />);

    let input = element.find('InputGroup');

    expect(input.props().value).toStrictEqual([]);
  });

  describe('Expected to change the value 3 times', () => {

    const element = mount(<InputGroup />);

    const fakeArrayValues = ['dogs', 'parrots'];

    it('Expected the input\'s value to be empty', () => {

      let input = element.find('#checkbox-pets-dogs');

      expect(input.props().checked).toBeFalsy();

    });


    it('Expected to check the dogs option', () => {

      let input = element.find('#checkbox-pets-dogs');

      const fakeChange = {
        target: {
          name: 'pets',
          value: 'dogs'
        }
      };

      input.simulate('change', fakeChange);

      element.update();

      input = element.find('#checkbox-pets-dogs');

      expect(input.props().checked).toBeTruthy();
    });

    it('Expected to check Parrots option', () => {
      let input = element.find('#checkbox-pets-parrots');

      const fakeChange = {
        target: {
          name: 'pets',
          value: 'parrots'
        }
      };

      input.simulate('change', fakeChange);

      element.update();

      input = element.find('#checkbox-pets-parrots');

      expect(input.props().checked).toBeTruthy();
    });

    it('Expected Values to be dogs and parrots', () => {

      expect(element.state('pets')).toEqual(fakeArrayValues);
    });
  });
});