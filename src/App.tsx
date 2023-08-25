import React, { useState, useEffect, ChangeEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { nanoid } from 'nanoid';

import { Container } from './Components/Container';
import { Section, Title } from './Components/Section';
import Form from './Components/Form';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';
import NotificationMessage from './Components/NotificationMessage';

type TContact = {
  name: string;
  number: string;
};

const getContact = () => {
  return [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
};

const App = () => {
  const [contacts, setContacts] = useState(() => getContact());
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storageContacts = JSON.parse(
      localStorage.getItem('contacts') || '[]'
    );

    if (storageContacts) {
      setContacts(storageContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }: TContact) => {
    const isExist = contacts.filter(contact => contact.name === name);

    if (isExist) {
      toast.error('Contact is Exist!');
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    toast.success('Contact added');

    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const deleteItem = (itemId: string) => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== itemId)
    );
  };

  const filterEnter = (evt: ChangeEvent<HTMLInputElement>) => {
    setFilter(evt.target.value);
  };

  const filterChange = () => {
    const normalizeFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  return (
    <Container>
      <Toaster
        toastOptions={{
          error: {
            duration: 2000,
          },
        }}
      />
      <Section>
        <Title>Phonebook</Title>
        <Form onSubmit={addContact} />
      </Section>
      <Section>
        <Title>Contacts</Title>
        <Filter value={filter} onChange={filterEnter} />
        {contacts.length < 1 ? (
          <NotificationMessage>No Contacts</NotificationMessage>
        ) : (
          <ContactList contacts={filterChange()} onDeleteItem={deleteItem} />
        )}
      </Section>
    </Container>
  );
};

export default App;
