import React, { Component } from "react";
import Phonebook from "components/Phonebook/Phonebook";
import Contacts from "components/Contacts/Contacts";
import Filter from "components/Filter/Filter"




export class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  #localStorageContactsKey = "contacts";

  componentDidMount() {
    const currentContacts = JSON.parse(
      localStorage.getItem(this.#localStorageContactsKey)
    );

    if (currentContacts) {
      this.setState({ contacts: currentContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts: currentContacts } = this.state;
    const { contacts: prevContacts } = prevState;

    if (currentContacts.length !== prevContacts.length) {
      localStorage.setItem(
        this.#localStorageContactsKey,
        JSON.stringify(currentContacts)
      );
    }
  }

  handleAddContact(newContact) {
    console.log(this.state);
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  }

  handleFilter(event) {
    const { value } = event.target;

    this.setState({ filter: value });
  }

  handleDelete(id) {
    const filteredContacts = this.state.contacts.filter(
      (contact) => contact.id !== id
    );

    this.setState({ contacts: filteredContacts });
  }

  render() {
    const { contacts, filter } = this.state;

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
      <Phonebook  handleAddContact={this.handleAddContact.bind(this)}
          contacts={contacts}/>
      <h2>Contacts</h2>
      <Filter filterText={filter}
          handleFilter={this.handleFilter.bind(this)}/>
      
      <Contacts contacts={contacts}
          filterText={filter}
          handleDelete={this.handleDelete.bind(this)}
        />
      
    </div> 
  );
};
}
export default App;
