import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ filteredContacts }) => {
  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact name={contact.name} number={contact.number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
