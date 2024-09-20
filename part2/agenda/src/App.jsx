import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter';
import PersonForm from './PersonForm';

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
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
      {
        (nameFilter === '') ? persons.map(person => <p key={person.id}>{person.name} {person.number}</p>) :
        persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase())).map(person => <p key={person.id}>{person.name} {person.number}</p>)
      }
    </div>
  )
}

export default App