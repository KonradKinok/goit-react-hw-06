import React, { FormEvent, useState } from "react";
import { nanoid } from "nanoid";
import scss from "./ContactForm.module.scss";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice";
import { useSelector } from "react-redux";
import { getContacts } from "../redux/selectors";
import toast from "react-hot-toast";

export interface AddContact {
  name: string;
  number: string;
}

const ContactForm: React.FC = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [contactToAdd, setContactToAdd] = useState<AddContact>({
    name: "",
    number: "",
  });

  const isValidPhoneNumber = (phoneNumber: string) => {
    const regex = /^\d{3}-\d{3}-\d{3}$/;

    return regex.test(phoneNumber);
  };

  const isValidName = (name: string) => {
    const regex = /^[\p{L}\s]+$/u;
    return regex.test(name);
  };
  const handleInputChange = (field: string, value: string) => {
    setContactToAdd((prevContact) => ({ ...prevContact, [field]: value }));
  };

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    const newName = contactToAdd.name;
    const newNumber = contactToAdd.number;

    if (!isValidName(newName)) {
      const errorMessage = `Invalid name: '${newName}'.\nName may contain only letters and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore`;
      console.log({ errorMessage }, { contactToAdd });
      toast.error(errorMessage, {
        position: "top-center",
        duration: 4000,
      });
      return;
    }

    if (!isValidPhoneNumber(newNumber)) {
      const errorMessage = `Invalid number: '${newNumber}'.\nPhone number must be digits. Example: 567-216-456`;
      console.log({ errorMessage }, { contactToAdd });
      toast.error(errorMessage, {
        position: "top-center",
        duration: 4000,
      });
      return;
    }

    const contactExists = contacts.some(
      (existingContact) =>
        existingContact.name === newName || existingContact.number === newNumber
    );

    if (contactExists) {
      window.alert(`${newName} or ${newNumber} is already in contacts`);
      return;
    }

    dispatch(addContact(newName, newNumber));
    console.log({ dispatch }, { contactToAdd });
    setContactToAdd({
      name: "",
      number: "",
    });
  };

  const nameId = nanoid();
  const numId = nanoid();
  return (
    <>
      <form className={scss.form} onSubmit={handleSubmit}>
        <label htmlFor={nameId}>Name</label>
        <input
          id={nameId}
          type="text"
          name="name"
          value={contactToAdd.name}
          onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          title="Name may contain only letters and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore"
          required
        />
        <label htmlFor={numId}>Phone number</label>
        <input
          id={numId}
          type="tel"
          name="number"
          value={contactToAdd.number}
          placeholder="567-215-453"
          onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          title="Phone number must be digits. Example: 567-216-456"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};

export default ContactForm;
