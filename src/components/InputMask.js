import React, { Component } from 'react';
import { InputMask } from 'react-nice-inputs';

class InputMaskWrapper extends Component {

  state = {
    creditCard: ''
  }

  handleChange = (value, name, event) => {
    this.setState({ [name]: value });
    // this.setState({ [event.target.name]: event.target.value });
  }

  render() {

    return (
      <div className="input-controls">
        <label htmlFor="creditCard">Credit Card Number: </label>
          <InputMask
            type="text"
            name="creditCard"
            classList={ ['hi'] }
            onChange={ this.handleChange }
            value={ this.state.creditCard }
            attrs={{ 'data-testid': 'creditCard', required: true, maxLength: 16}}
            cc
            last
          />
      </div>
    );
  }
}

export default InputMaskWrapper;
