import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from "./Phonebook.module.css";
import { nanoid } from 'nanoid';


const Phonebook = ({addContact}) => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

const handleSubmit = event => {
    event.preventDefault();

    const contact = {
        id: nanoid(),
        name, 
        number,
    };

    addContact(contact);
    setName("");
    setNumber("");
};

    return(
    <form className={css.formContact} onSubmit={handleSubmit} >
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
        onChange={event => setName(event.target.value)}
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
        onChange={event => setNumber(event.target.value)}
        />
      <button className={css.formBtn} type="submit">Add contact</button>

    </form>
    );
};

Phonebook.propTypes = {
    addContact: PropTypes.func.isRequired,
};


export default Phonebook;