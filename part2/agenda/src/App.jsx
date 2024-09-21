import { useState, useEffect } from 'react'
import { getAllPersons } from './services/persons';
import Filter from './Filter';
import PersonForm from './PersonForm';
import PersonList from './PersonList';
import Notification from './Notification';

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [notification, setNotification] = useState({message: null, type: ''});

  function setTimeoutNotification({message, type}) {
    setNotification({message, type});
    setTimeout(() => {
      setNotification({message: null, type: ''});
    }, 5000);
  }

  useEffect(() => {
    getAllPersons((persons, error) => {
      if (error) {
        setTimeoutNotification({message: `Error on service: ${error.message} (${error.code})`, type: 'error'});
        console.log(error);
      } else {
        setPersons(persons);
      }
    })
  }, []);

  return (
    <div>
      <Notification message={notification.message} type={notification.type} />
      <h2>Phonebook</h2>
      <Filter filter={nameFilter} setFilter={setNameFilter} />
      <PersonForm 
        persons={persons} 
        setPersons={setPersons} 
        newName={newName} 
        setNewName={setNewName} 
        newNumber={newNumber} 
        setNewNumber={setNewNumber}
        setNotification={setTimeoutNotification}
      />
      <h2>Numbers</h2>
      <PersonList 
        persons={persons}
        setPersons={setPersons}
        filter={nameFilter}
        setNotification={setTimeoutNotification}
      />
    </div>
  )
}

export default App