## // //! --------------------------------------------- Actions

//! ЕКШЕНИ описують тільки те, що сталося а не як змінюється стан програми

// //\* правила найменування типу екшенів

// //! У значенні поля type 2 частини у форматі domain/eventName ----

// //_ domain - ім'я сутності , до якої належить екшен (збігається з ім'ям
властивості стану Redux) // //_ eventName - подія, якн описує екшен (addTask,
deleteTask, toggleCompleted, statusFilter)

// //?Генератори екшенів (Action Creators) - функції, які можуть приймати
аргументи, після чого створюють та повертають // // ?екшени з однаковим
значенням властивості type, але різними payload

// //! Відправлення екшенів - хук useDispatch() - повертає посилання на функцію
відправки екшенів dispatch

// //! з об'єкта створеного нами раніше стора Redux

// //?
-----------------------------------------------REDUCERS---------------------------------------------

// //\* ---- Reducer - функція , яка приймає поточний стан та екшен і повертає
новий стан --- // //! ЕКШЕНИ описують тільки те, що сталося а не як змінюється
стан програми

// //\*
========================================BEFORE================================================

// import { createAction } from '@reduxjs/toolkit'; // import { nanoid } from
'nanoid'; // // import { nanoid } from 'nanoid';

// // export const addContacts = (name, number) => { // // return { // // type:
'contacts/addContact', // // payload: { // // id: nanoid(), // // name, // //
number, // // }, // // }; // // };

// // export const deleteContact = contactId => { // // return { // // type:
'contacts/deleteContact', // // payload: contactId, // // }; // // };

// // export const changeValueFilter = value => { // // return { // // type:
'filter/changeValueFilter', // // payload: value, // // }; // // };

//
//\*=============================================AFTER==========================================

// export const addContacts = createAction( // 'contacts/addContact', // (name,
number) => { // return { // payload: { // id: nanoid(), // name, // number, //
}, // }; // } // );

// export const deleteContact = createAction( // 'contacts/deleteContact' // //
, // // contactId => { // // return { // // payload: contactId, // // }; // // }
// );

// export const changeValueFilter = createAction( // 'filter/changeValueFilter'
// // , // // value => { // // return { // // payload: value, // // }; // // }
// );
