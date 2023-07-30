import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, addContact, deleteContact } from '../redux/operations';
import { setFilter } from '../redux/filterSlice';
import { NewContact } from './NewContact';
import { ListContact } from './ListContact';
import { FilterContact } from './FilterContact';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addNewContact = ({ name, number }) => {
    const contactExists = contacts.find((contact) => contact.name === name);

    if (contactExists) {
      alert(`Homie "${name}" already exists in your contact list!`);
    } else {
      dispatch(addContact({ name, number }));
    }
  };

  const removeExistingContact = (id) => {
    dispatch(deleteContact(id));
  };

  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  const showFilterContacts = () => {
    const makeLowerCase = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(makeLowerCase)
    );
  };

  return (
    <div>
      <p>Your best contact's list:</p>
      <p>Type data and click button to add a new contact to your list.</p>
      <NewContact onSubmit={addNewContact} />
      <p>Can't find your contact? Type name below:</p>
      <FilterContact value={filter} onChange={changeFilter} />
      <p>Your contact list:</p>
      <ListContact
        contacts={showFilterContacts()}
        removeContact={removeExistingContact}
      />
    </div>
  );
};

