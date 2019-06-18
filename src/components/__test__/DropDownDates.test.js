import React from 'react';
import DropDownDates from '../DropDownDates';
import { mount, shallow } from 'enzyme';

describe('Testing <DropDownDates /> ', () => {

  it('Expected to render', () => {

    const element = shallow(<DropDownDates />);

    expect(element).toBeDefined();
  });

  it('Expected to have an empty value', () => {

    const element = mount(<DropDownDates />);

    let input = element.find('#birth');

    expect(input.props().value).toBe('');
  });

  describe('test date change', () => {
    const element = mount(<DropDownDates />);

    it('trigger month change', () => {
      const fakeChange = {
        target: {
          name: 'mm-birth',
          value: 2,
        }
      };

      let input = element.find('#mm-birth');

      element.debug();

      input.simulate('change', fakeChange);

      element.update();

      input = element.find('#mm-birth');

      expect(input.props().value).toEqual(2);
    });

    it('trigger day change', () => {
      const fakeChange = {
        target: {
          name: 'dd-birth',
          value: 12,
        }
      };

      let input = element.find('#dd-birth');

      element.debug();

      input.simulate('change', fakeChange);

      element.update();

      input = element.find('#dd-birth');

      expect(input.props().value).toEqual(12);
    });

    it('trigger Year change', () => {
      const fakeChange = {
        target: {
          name: 'yyyy-birth',
          value: 2020,
        }
      };

      let input = element.find('#yyyy-birth');

      element.debug();

      input.simulate('change', fakeChange);

      element.update();

      input = element.find('#yyyy-birth');

      expect(input.props().value).toEqual(2020);
    });

    it('check state changed', () => {
        expect(element.state('birth')).toEqual('2020-02-12');
    });
  });
});