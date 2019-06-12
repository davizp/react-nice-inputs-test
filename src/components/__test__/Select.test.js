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

  describe('Expected to change value from hn then to empty', () => {

    const element = mount(<Select />);

    it('Expected to change value to hn', () => {

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

    it('Expected to change value to us', () => {

      const fakeChange = {
        target: {
          name: 'countries',
          value: 'us'
        }
      };

      let input = element.find('select');

      expect(input.props().value).toBe('hn');

      input.simulate('change', fakeChange);

      element.update();

      input = element.find('select');

      expect(input.props().value).toBe('us');
    });

    it('Expected to change value to empty', () => {

      const fakeChange = {
        target: {
          name: 'countries',
          value: ''
        }
      };

      let input = element.find('select');

      expect(input.props().value).toBe('us');

      input.simulate('change', fakeChange);

      element.update();

      input = element.find('select');

      expect(input.props().value).toBeFalsy();
    });
  });
});
