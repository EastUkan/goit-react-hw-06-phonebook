import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('phonebook/add_contact', item => ({
  payload: {
    contact: {
      id: uuidv4(),
      item,
    },
  },
}));

const removeContact = createAction('phonebook/remove_contact');

const findContact = createAction('phonebook/find_contact');

export default { addContact, removeContact, findContact };
