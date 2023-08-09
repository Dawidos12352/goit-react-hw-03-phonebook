import React from 'react';
import PropTypes from 'prop-types';
import css from "./Contacts.css";

const Contacts = ({ contacts, filterText, handleDelete }) => {
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterText.toLowerCase())
    );
  
    return (
      <ul className={css.contactsList}>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id} className={css.contactsItem}>
            <p className={css.contactsName}>
              {name}: {number}
            </p>
  
            <button
              className={css.delateBtn}
              type="button"
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  };

  Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    filterText: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired,
  };




export default Contacts;