import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import phonebookActions from './phonebook-actions';

const addContact = (state, action) => {
  return [...state, action.payload.contact];
};

const removeContact = (state, action) => {
  return state.filter(contact => contact.id !== action.payload);
};

const items = createReducer([], {
  [phonebookActions.addContact]: addContact,
  [phonebookActions.removeContact]: removeContact,
});

const filter = createReducer('', {
  [phonebookActions.findContact]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
