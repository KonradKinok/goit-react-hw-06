import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import * as globalFunctions from "../../globalFunctions/functions.js";

const LOCAL_STORAGE_KEY = "Phonebook-local-storage";

interface Contact {
  id: string;
  name: string;
  number: string;
  date: string;
}

// Definiowanie typu dla stanu, który jest tablicą kontaktów
type ContactsState = Contact[];

const contactsInitialState: ContactsState =
  (globalFunctions.loadLocalStorage(LOCAL_STORAGE_KEY) as ContactsState)||[];
const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state: ContactsState, action: PayloadAction<Contact>) {
        return [...state, action.payload];
      },
      prepare(name: string, number: string) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
            date: new Date().toISOString(),
          } as Contact,
        };
      },
    },
    deleteContact(state: ContactsState, action: PayloadAction<string>) {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
