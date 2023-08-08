import React from 'react';
import PropTypes from 'prop-types';
import css from "./Contacts.css";

const Contacts = ({contacts, onDeleteContact}) => (
        <ul>
            {contacts.map(contact => (
                <ContactItem
                key={contact.id}
                contact={contact}
                onDeleteContact={onDeleteContact}
                />
            ))}
        </ul>
    );

    Contacts.propTypes = {
        contacts: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
            })
        ).isRequired,
        onDeleteContact: PropTypes.func.isRequired,   
    };

    const ContactItem = ({contact, onDeleteContact}) => (
        <li>
            <p className={css.contact}>
                {contact.name}: {contact.number}
            </p> 
            <button className={css.deleteBtn} onClick={() => onDeleteContact(contact.id)}>Delete</button>
        </li>
    );

    ContactItem.propTypes = {
        contact: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired,
        onDeleteContact: PropTypes.func.isRequired,
    }




export default Contacts;