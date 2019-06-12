import React, { Component } from 'react';
import { Input } from 'react-nice-inputs';

class InputWrapper extends Component {

  state = {
    firstName: ''
  }

  handleChange = (value, name, event) => {
    // this.setState({ [name]: value });
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {

    return (
      <div className="input-controls">
        <label htmlFor="firstName">First Name: </label>
        <Input
          type="text"
          id="firstName"
          name="firstName"
          value={this.state.firstName}
          classList={ [] }
          onChange={ this.handleChange }
          attrs={{ placeholder: 'enter a value' }}
        />
      </div>
    );
  }
}

export default InputWrapper;
