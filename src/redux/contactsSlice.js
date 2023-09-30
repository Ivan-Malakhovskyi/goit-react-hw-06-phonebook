const { createSlice } = require("@reduxjs/toolkit");
const { nanoid } = require("nanoid");


const contactsInitialState = [ { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContacts: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(name,number) {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid(),

                        }
                    }
            }
        },
        deleteContact: {
            reducer(state, action) {
                const idx = state.findIndex(contact => contact.id !== action.payload)
                console.log(state.splice(idx,1))
            }
        }

       
    }
})

export const { addContacts, deleteContact } = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer

