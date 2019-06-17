import React, { Component } from 'react';
import { InputGroup } from 'react-nice-inputs';

const _internals = {};

_internals.taksOptions = [
    { label: 'Wash Car', value: 'car' },
    { label: 'Clean House', value: 'house' },
    { label: 'Do Homework', value: 'homework' },
    { label: 'Study', value: 'study', attrs: { disabled: true } }
  ];

class InputGroupWrapper extends Component {

  state = {
    tasks: []
  }

  _handleChange = (value, name, event) => {

    const tasks = value.split(',');

    // this.setState({ tasks[event.target.name]: event.target.value });

    this.setState({ [name]: tasks });
  }

  render() {

    return (
      <div className="input-controls">

        <label htmlFor="pets">Select Task:</label>

        <InputGroup
          type="radio"
          id="tasks"
          name="tasks"
          value={this.state.tasks}
          classList={ [] }
          onChange={ this._handleChange }
          options={_internals.taksOptions}
        />
      </div>
    );
  }
}

export default InputGroupWrapper;
