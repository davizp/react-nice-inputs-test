import React, { Component } from 'react';
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
        <Select
          id="countries"
          name="countries"
          value={this.state.countries}
          classList={ [] }
          onChange={ this._handleChange }
          options={_internals.countriesOptions}
          // attrs={}
          defaultText="Select a Country..."
        />
      </div>
    );
  }
}

export default SelectWrapper;
