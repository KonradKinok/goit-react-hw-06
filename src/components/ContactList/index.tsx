import React from "react";
import {  useSelector } from "react-redux";
import { getContacts } from "../redux/selectors";
import {getStatusFilter} from "../redux/selectors"
import SeparateContact from "../SeparateContact/index";

interface Contact {
  id: string;
  name: string;
  number: string;
  date: string;
}

const ContactList: React.FC = () => {
  const contacts = useSelector(getContacts);
  const statusFilter = useSelector(getStatusFilter);
  const filteredContacts = contacts.filter((contact:Contact) =>
      contact.name.toLowerCase().includes(statusFilter.toLowerCase()),
  );

    return (
        <div>
            <ul>
                {filteredContacts.map((contact) => (
                    <SeparateContact
                        key={contact.id}
                        contact={contact}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ContactList;