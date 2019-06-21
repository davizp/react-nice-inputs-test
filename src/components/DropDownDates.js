import React, { Component } from 'react';
import { DropDownDate } from 'react-nice-inputs';


class DropDownDateWrapper extends Component {

  state = {
    birth: ''
  }

  _handleChange = (value, name, event) => {

    // this.setState({ [event.target.name]: event.target.value });

    this.setState({ [name]: value });
  }

  render() {

    return (
      <div className="input-controls">
        <label htmlFor="pets">Date:</label>
          <DropDownDate name="birth"
            classList={ [] }
            onChange={ this._handleChange }
            labelM=""
            labelD=""
            labelY=""
            mmClassList={ [ 'sm-4' ] }
            ddClassList={ [ 'sm-4' ] }
            yyyyClassList={ [ 'sm-4' ] }
            defaultTextM="MM"
            defaultTextD="DD"
            defaultTextY="YYYY"
            maxDate="2022-01-01"
            minDate="1985-01-01"
            format="YYYY-MM-DD"
          />
      </div>
    );
  }
}

export default DropDownDateWrapper;
