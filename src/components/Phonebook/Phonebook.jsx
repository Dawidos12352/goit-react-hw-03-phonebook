import React, { Component } from "react";
import PropTypes from 'prop-types';
import css from "./Phonebook.module.css";
import { nanoid } from 'nanoid';


class Phonebook extends Component {
  state = {
    name: "",
    number: "",
  };

  handleContactData(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    for (const { name } of this.props.contacts) {
      if (name === this.state.name) {
        alert(`${name} is already in contacts`);

        return;
      }
    }

    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.handleAddContact(newContact);

    this.setState({ name: "", number: "" });
  }

  render() {
    const { name, number } = this.state;

    return(
      <form onSubmit={this.handleSubmit.bind(this)} className={css.formContact}>
      <label className={css.inputName}>Name</label>
      <input
        className={css.inputContactName}
        type="text"
        name="name"
        minLength={2}
        maxLength={50}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={this.handleContactData.bind(this)}
      />
      <label className={css.inputName}>Number</label>
      <input
        className={css.inputContactName}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={this.handleContactData.bind(this)}
        />
      <button className={css.formBtn} type="submit">Add contact</button>

    </form>
    );
};
}

Phonebook.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleAddContact: PropTypes.func.isRequired,
};



export default Phonebook;