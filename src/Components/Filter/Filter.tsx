import { ChangeEvent } from 'react';

import { ImputEnter, InputType, InputText } from '../FormComponents';
import PropTypes from 'prop-types';

type Props = {
  value: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
};

const Filter = ({ onChange, value }: Props) => {
  return (
    <InputType>
      <InputText>Find contact by name</InputText>
      <ImputEnter onChange={onChange} value={value} />
    </InputType>
  );
};

Filter.prototype = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;
