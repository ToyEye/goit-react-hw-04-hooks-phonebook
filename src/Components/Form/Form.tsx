import { useState, ChangeEvent, FormEvent } from 'react';

import Button from '../Button';

import {
  ImputEnter,
  InputType,
  InputText,
  FormStyled,
} from '../FormComponents';

type TContacts = {
  name: string;
  number: string;
};

type Props = {
  onSubmit: (args: TContacts) => void;
};
const Form = ({ onSubmit }: Props) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputType>
        <InputText>Name</InputText>
        <ImputEnter
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter your name"
          required
          value={name}
          onChange={handleChange}
        />
      </InputType>
      <InputType>
        <InputText>Name</InputText>
        <ImputEnter
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter your number"
          value={number}
          onChange={handleChange}
        />
      </InputType>
      <Button type="submit">Add contact</Button>
    </FormStyled>
  );
};

export default Form;
