import React, { useState } from 'react';
import Phonebook from "components/Phonebook/Phonebook";
import Contacts from "components/Contacts/Contacts";
import Filter from "components/Filter/Filter"





export const App = () => {

  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const addContact = contact => {
    const isContact = contacts.some(event =>
      event.name.toLowerCase() === contact.name.toLowerCase());
 

  if(isContact) {
    alert(`${contact.name} is already in contacts.`);
    return;
  };

  setContacts(prevContacts => [...prevContacts, contact]);
};

const deleteContact = id => {
  setContacts(prevContacts =>
    prevContacts.filter(contact => contact.id !== id));
};

const filteredContacts = contacts.filter(contact =>
  contact.name.toLowerCase().includes(filter.toLowerCase()));


  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
        flexDirection: "column",
      }}
    >
      <h1>Phonebook</h1>
      <Phonebook addContact={addContact}/>
      <h2>Contacts</h2>
      <Filter filter={filter} onChangeFilter={setFilter}/>
      {filteredContacts.length > 0 ? (
      <Contacts contacts={filteredContacts} onDeleteContact={deleteContact}/>
      ) : ( <p>No contacts found.</p>)
    }
    </div> 
  );
};

export default App;
