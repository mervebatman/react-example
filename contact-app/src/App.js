import './App.css';
import List from './Components/List';
import Form from './Components/Form';
import { useState, useEffect } from 'react';

function App() {

  const [contacts, setContacts] = useState([
    {
      fullName: "Merve",
      phoneNumber: 123123 
    }, 
    {
      fullName: "Ayşe",
      phoneNumber: "23562356"
    },
    {
      fullName: "Mehmet",
      phoneNumber: "147852"
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts])

  return (
    <div className="App" id="container">
    <h5>Contact List</h5>  
    <List contacts={contacts} />
    <Form addContact={setContacts} contacts={contacts} />


    </div>
  );
}

export default App;
