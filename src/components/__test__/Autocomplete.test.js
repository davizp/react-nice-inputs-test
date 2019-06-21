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

  describe('Expected to change value', () => {

    const element = mount(<Autocomplete />);

    it('Expected to populate HN option', () => {

      let input = element.find('#country');

      const fakeChange = {
        target: {
          name: 'country',
          value: 'hon'
        }
      };

      expect(element.state('country')).toEqual('');

      input.simulate('change', fakeChange);

      element.update();

      let countryLabel = element.find('[data-value="hn"]');

      countryLabel.simulate('click');

     	input = element.find('#country');

     	// console.log('input.value()', input.debug());

      expect(input.props().value).toEqual('Honduras');
    });
  });
})
