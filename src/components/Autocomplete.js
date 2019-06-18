import React, { Component } from 'react';
import { FormGroup } from 'react-nice-inputs';

const _internals = {};

_internals.countriesOptions = [
  { label: 'Honduras', value: 'hn' },
  { label: 'United States', value: 'us' },
  { label: 'Canada', value: 'ca' }
];

class AutocompleteWrapper extends Component {

  state = {
    country: ''
  }

  _handleChange = (value, name, event) => {

    // this.setState({ [event.target.name]: event.target.value });
    this.setState({ [name]: value });
  }

  render() {

    return (
      <div className="input-controls">
        <label htmlFor="countries">
          Select a Country:
        </label>
          <FormGroup type="autocomplete"
            name="country"
            onChange={ this._handleChange }
            classList={['']}
            boxClassList={['sm-12', 'lg-6', 'departing']}
            label="Flights departing from:"
            attrs={
              { placeholder: 'Select Gateway', 'autoComplete': 'off', 'maxLength': 50 }
            }
            dataList={_internals.countriesOptions}
            icon={['icon-pin']}
          />
      </div>
    );
  }
}

export default AutocompleteWrapper;