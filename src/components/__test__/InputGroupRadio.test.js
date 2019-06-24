import React from 'react';
import InputGroup from '../InputGroupRadio';
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

  describe('Expected to change in each event', () => {

    const element = mount(<InputGroup />);

    const fakeArrayValues = ['house'];

    it('Expected to check car option', () => {

      let input = element.find('#radio-tasks-car');

      const fakeChange = {
        target: {
          name: 'tasks',
          value: 'car'
        }
      };

      input.simulate('change', fakeChange);

      element.update();

      input = element.find('#radio-tasks-car');

      expect(input.props().checked).toBeTruthy();
    });

    it('Expected to check house option', () => {
      let input = element.find('#radio-tasks-house');

      const fakeChange = {
        target: {
          name: 'tasks',
          value: 'house'
        }
      };

      input.simulate('change', fakeChange);

      element.update();

      input = element.find('#radio-tasks-house');

      expect(input.props().checked).toBeTruthy();
    });

    it('Expected Values to be house', () => {

      expect(element.state('tasks')).toEqual(fakeArrayValues);
    });
  });
});