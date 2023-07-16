import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, removeContact } from '../redux/contactsSlice';
import { setFilter } from '../redux/filterSlice';
import { NewContact } from './NewContact';
import { ListContact } from './ListContact';
import { FilterContact } from './FilterContact';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  const addNewContact = ({ name, number }) => {
    const contactExists = contacts.find((contact) => contact.name === name);

    if (contactExists) {
      alert(`Homie "${name}" already exists in your contact list!`);
    } else {
      dispatch(addContact({ name, number }));
    }
  };

  const removeExistingContact = (id) => {
    dispatch(removeContact(id));
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


// import React from 'react';
// // hooks:
// import { useState, useEffect } from 'react';
// // nanoid:
// import { nanoid } from 'nanoid';
// // components:
// import { NewContact } from './NewContact';
// import { ListContact } from './ListContact';
// import { FilterContact } from './FilterContact';

// export const App = () => {
//   const [contacts, setContacts] = useState(
//     JSON.parse(window.localStorage.getItem('saved contacts')) || []
//   );
//   const [filter, setFilter] = useState('');

//   const addNewContact = ({ name, number }) => {
//     const contactExists = contacts.find(contact => contact.name === name);

//     if (contactExists) {
//       alert(`homie "${name}" is already existing on your phone list!`);
//       return contacts;
//     } else {
//       setContacts([
//         {
//           id: nanoid(),
//           name,
//           number,
//         },
//         ...contacts,
//       ]);
//     }
//   };

//   const removeExistingContact = id => {
//     setContacts(prevState => prevState.filter(contact => contact.id !== id));
//   };

//   const changeFilter = change => {
//     setFilter(change.target.value);
//   };

//   const showFilterContacts = () => {
//     const makeLowerCase = filter.toLowerCase();

//     return contacts
//       .map(
//         contact => contact.name.toLowerCase().includes(makeLowerCase) && contact
//       )
//       .filter(contact => contact !== false);
//   };

//   useEffect(() => {
//     window.localStorage.setItem('saved contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   return (
//     <div>
//       <p>your best contact's list:</p>
//       <p>type data and click button to add new contact to your list</p>
//       <NewContact onSubmit={addNewContact} />
//       <p>can't find your contact? type name below:</p>
//       <FilterContact value={filter} onChange={changeFilter} />
//       <p>contact' list of yours homies:</p>
//       <ListContact
//         contacts={showFilterContacts()}
//         removeContact={removeExistingContact}
//       />
//     </div>
//   );
// };
