import './App.css';
import React, { useState, useEffect } from 'react';
import { Container } from './Components/Container';
import Form from './Components/Form';
import { Section, Title } from './Components/Section';
import ContactList from './Components/ContactList';
import { nanoid } from 'nanoid';
import Filter from './Components/Filter';
import toast, { Toaster } from 'react-hot-toast';
import NotificationMessage from './Components/NotificationMessage';

function getContact() {
  return [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
}

export default function App() {
  const [contacts, setContacts] = useState(() => getContact());
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storageContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(storageContacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    let array = contacts.filter(contact => contact.name);
    if (!array.includes(name)) {
      const newContact = {
        id: nanoid(),
        name: name,
        number: number,
      };
      toast.success('Контакт добавлен');
      return setContacts(contacts => [newContact, ...contacts]);
    } else {
      toast.error('Контакт существует!');
      return;
    }
  };

  const deleteItem = itemId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== itemId)
    );
  };

  const filterEnter = evt => {
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
}
