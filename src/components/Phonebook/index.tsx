import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getContacts } from "../redux/selectors";
import { Toaster } from "react-hot-toast";
import * as globalFunctions from "../../globalFunctions/functions";
import ContactForm from "../ContactForm/index";
import Filter from "../Filter/index";
import ContactList from "../ContactList/index";
import scss from "./Phonebook.module.scss";
const LOCAL_STORAGE_KEY = "Phonebook-local-storage";

export function Contacts() {
  const contacts = useSelector(getContacts);

  useEffect(() => {
    globalFunctions.saveLocalStorage(LOCAL_STORAGE_KEY, contacts);
  }, [contacts]);

  return (
    <div className={scss.phonebookContainer}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
