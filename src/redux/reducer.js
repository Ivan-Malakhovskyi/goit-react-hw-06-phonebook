//* -------------------------------BEFORE--------------------------------------

// import { combineReducers } from 'redux';

// const contactsInitialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact':
//       return [...state, action.payload];

//     case 'contacts/deleteContact':
//       return state.filter(contact => contact.id !== action.payload);

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'filter/changeValueFilter':
//       return action.payload;
//     default:
//       return state;
//   }
// };

//*Щоб не писати

// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

//! Ось це вручну

// export const rootReducer = (state = {}, action) => {
//   return {
//     contacts: contactsReducer(state.contacts, action),
//     filter: filterReducer(state.filter, action),
//  }
// };

//* ---------------------------------------------AFTER ------------------------------

import { createReducer } from '@reduxjs/toolkit';
import { addContacts, changeValueFilter, deleteContact } from './actions';

// const contactsInitialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// export const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case addContacts.type:
//       return [...state, action.payload];

//     case deleteContact.type:
//       return state.filter(contact => contact.id !== action.payload);

//     default:
//       return state;
//   }
// };

// export const filterReducer = (state = '', action) => {
//   switch (action.type) {
//     case changeValueFilter.type:
//       return action.payload;
//     default:
//       return state;
//   }
// };

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsReducer = createReducer(contactsInitialState, {
  [addContacts]: (state, action) => {
    state.push(action.payload);
    // return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    // return state.filter(contact => contact.id !== action.payload);
    const idx = state.findIndex(contact => contact.id === action.payload);
    state.splice(idx, 1);
  },
});

export const filterReducer = createReducer('', {
  [changeValueFilter]: (state, action) => {
    return action.payload;
  },
});
