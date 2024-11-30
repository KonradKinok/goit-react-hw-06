import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsSlice";
import * as globalFunctions from "../../globalFunctions/functions";
import scss from "./SeparateContact.module.scss";

interface Contact {
  id: string;
  name: string;
  number: string;
  date: string;
}

interface SeparateContactProps {
  contact: Contact;
}

const SeparateContact: React.FC<SeparateContactProps> =  ({ contact })=> {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

    return (
      <li className={scss.containerContact} key={contact.id} >
        <div className={scss.containerNameDate}>
          <div>
            <p>{contact.name}</p>
            <p className={scss.data}>{globalFunctions.formatDateAndHour(contact.date)}</p>
          </div>
          <div >
            <p>:{contact.number}</p>
          </div>
        </div>
        <div >
          <button
            type="button"
            onClick={handleDelete}>
            Delete
          </button>
        </div>
      </li>
    );
};

export default SeparateContact;