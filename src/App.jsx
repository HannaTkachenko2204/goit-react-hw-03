import { useState } from 'react'
//import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const [contacts, setContacts] = useState([
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
])
console.log(setContacts);

const [input, setInput] = useState('')

const handleInputChange = (event) => {
  setInput(event.target.value);
};

const filteredContacts = contacts.filter(contact =>
  contact.name.toLowerCase().includes(input.toLowerCase())
);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox input={input} handleInputChange={handleInputChange}/>
      <ContactList filteredContacts={filteredContacts}/>
    </div>
  );
}

export default App;
