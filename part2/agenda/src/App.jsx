import { useState, useEffect } from 'react'
import { getAllPersons } from './services/persons';
import Filter from './Filter';
import PersonForm from './PersonForm';
import PersonList from './PersonList';

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    getAllPersons((persons, error) => {
      if (error) {
        console.log(error);
      } else {
        setPersons(persons);
      }
    })
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={nameFilter} setFilter={setNameFilter} />
      <PersonForm 
        persons={persons} 
        setPersons={setPersons} 
        newName={newName} 
        setNewName={setNewName} 
        newNumber={newNumber} 
        setNewNumber={setNewNumber} 
      />
      <h2>Numbers</h2>
      <PersonList persons={persons} setPersons={setPersons} filter={nameFilter} />
    </div>
  )
}

export default App