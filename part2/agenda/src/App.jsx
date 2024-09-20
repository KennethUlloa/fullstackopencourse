import { useState } from 'react'
import Filter from './Filter';
import PersonForm from './PersonForm';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [nameFilter, setNameFilter] = useState('');

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