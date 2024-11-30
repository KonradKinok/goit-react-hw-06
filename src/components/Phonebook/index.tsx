import { Toaster } from "react-hot-toast";
import ContactForm from "../ContactForm/index";
import Filter from "../Filter/index";
import ContactList from "../ContactList/index";
import scss from "./Phonebook.module.scss";

export function Contacts() {
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
