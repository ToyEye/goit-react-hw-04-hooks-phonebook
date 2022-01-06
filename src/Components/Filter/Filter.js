import React from 'react';
import { ImputEnter, InputType, InputText } from '../FormComponents';
import PropTypes from 'prop-types';

const Filter = ({ onChange }) => {
  return (
    <InputType onChange={onChange}>
      <InputText>Find contact by name</InputText>
      <ImputEnter />
    </InputType>
  );
};

Filter.prototype = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;
