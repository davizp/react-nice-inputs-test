import React, { Component, Fragment } from 'react';
import { Select } from 'react-nice-inputs';

const _internals = {};

_internals.countriesOptions = [
  { label: 'Honduras', value: 'hn' },
  { label: 'United States', value: 'us' },
  { label: 'Canada', value: 'ca' }
];

class SelectWrapper extends Component {

  state = {
    countries: ''
  }

  _handleChange = (value, name) => {
    this.setState({ [name]: value });
  }

  render() {

    return (
      <Select
        name="countries"
        value={this.state.countries}
        classList={ [] }
        onChange={ this._handleChange }
        options={_internals.countriesOptions}
        // attrs={}
        defaultText: 'Select a Country...'
      />
    );
  }
}

export default SelectWrapper;
