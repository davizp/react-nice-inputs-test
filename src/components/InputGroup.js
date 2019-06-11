import React, { Component, Fragment } from 'react';
import { InputGroup } from 'react-nice-inputs';

const _internals = {};

_internals.petsOptions = [
    { label: 'Dogs 🐺', value: 'dogs' },
    { label: 'Parrots 🐦', value: 'parrots' },
    { label: 'Cats 😹', value: 'cats' },
    { label: 'Dinosaurs 🦖', value: 'dinos', attrs: { disabled: true } }
  ];

class InputGroupWrapper extends Component {

  state = {
    pets: ''
  }

  _handleChange = (value, name) => {
    this.setState({ [name]: value });
  }

  render() {

    return (
      <InputGroup
        type="checkbox"
        name="pets"
        value={this.state.pets}
        classList={ [] }
        onChange={ this._handleChange }
        options={_internals.petsOptions}
      />
    );
  }
}

export default InputGroupWrapper;
