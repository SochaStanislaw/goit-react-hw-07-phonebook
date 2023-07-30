import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

export const ListContact = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleRemoveContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name}:</p>
          <p>{number}</p>
          <button type="button" onClick={() => handleRemoveContact(id)}>
            remove
          </button>
        </li>
      ))}
    </ul>
  );
};

ListContact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};

