import React from 'react';
import '../css/App.css';

import Input from './Input';
import Select from './Select';
import InputGroupChekbox from './InputGroupCheckbox';
import InputGroupRadio from './InputGroupRadio';
import AutoComplete from './Autocomplete';

function App() {
  return (
    <div className="App">
      <h1>React Nice Inputs</h1>

      <p className="intro">
        This is a demo of <a href="//www.npmjs.com/package/react-nice-inputs" target="_blank" rel="noopener noreferrer">react-nice-inputs</a>. This repository was created for testing purposes using <a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer">jest</a> and <a href="//github.com/airbnb/enzyme/" target="_blank" rel="noopener noreferrer">enzyme</a>.
      </p>

      <Input />
      <Select />
      <InputGroupChekbox />
      <InputGroupRadio />
      <AutoComplete />
    </div>
  );
}

export default App;
