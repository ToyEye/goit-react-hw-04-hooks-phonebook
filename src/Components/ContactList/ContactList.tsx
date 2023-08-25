import React from 'react';

import Button from '../Button';

import {
  ContactStyledList,
  ContactItem,
  ContactName,
} from './ContactList.styled';

type TContacts = {
  name: string;
  id: string;
  number: string;
};

type Props = {
  contacts: TContacts[];
  onDeleteItem: (arg: string) => void;
};

const ContactList = ({ contacts, onDeleteItem }: Props) => (
  <ContactStyledList>
    {contacts.map(({ name, id, number }) => (
      <ContactItem key={id} id={id}>
        <ContactName>
          {name} : {number}
        </ContactName>
        <Button onClick={() => onDeleteItem(id)} type="button">
          Delete
        </Button>
      </ContactItem>
    ))}
  </ContactStyledList>
);

export default ContactList;
