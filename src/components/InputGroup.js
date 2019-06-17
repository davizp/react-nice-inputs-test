import React, { Component } from 'react';
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
    pets: []
  }

  _handleChange = (value, name, event) => {

    const pets = value.split(',');

    // this.setState({ pets[event.target.name]: event.target.value });

    this.setState({ [name]: pets });
  }

  render() {

    return (
      <div className="input-controls">
        <label htmlFor="pets">Pets:</label>
        <InputGroup
          type="checkbox"
          id="pets"
          name="pets"
          value={this.state.pets}
          classList={ [] }
          onChange={ this._handleChange }
          options={_internals.petsOptions}
        />
      </div>
    );
  }
}

export default InputGroupWrapper;
