import { createPerson, updatePerson, getPerson } from "./services/persons";

const PersonForm = ( { persons, setPersons, newName, setNewName, newNumber, setNewNumber}) => {
  function clearForm() {
    setNewName('');
    setNewNumber('');
  }

  function handleNewPerson() {
    const newPerson = {name: newName, number: newNumber};
    createPerson(newPerson, (person, error) => {
      if(person) {
        setPersons(persons.concat(person));
        clearForm();
      } else {
        console.log(error);
      }
    });
  }

  function handleUpdatePerson(person) {
    const newPerson = person;
    newPerson.number = newNumber;
    updatePerson(newPerson, (updatedPerson, error) => {
      if(updatedPerson) {
        setPersons(persons.map(p => p.id !== updatedPerson.id ? p : updatedPerson));
        clearForm();
      } else {
        console.log(error);
      }
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    getPerson({name: newName}, (persons, error) => {
      if(persons) {
        if (persons.length === 0) {
          handleNewPerson();
        } else if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
          const person = persons[0];
          handleUpdatePerson(person);
        }
      } else if (error) {
        console.log(error);
      }
    });
  }
    
  function handleNameChange(event) {
    console.log("name ",event.target.value);
    setNewName(event.target.value);
  }
    
  function handleNumberChange(event) {
    console.log("number ", event.target.value);
    setNewNumber(event.target.value);
  }

  return (
    <>
        <h2>Add a new</h2>
        <form onSubmit={handleSubmit}>
            <div>
                name: <input 
                    value={newName} 
                    onChange={handleNameChange}
                    required
                /><br/>
                number: <input 
                    value={newNumber} 
                    onChange={handleNumberChange} 
                    required
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
      </>
    );
}

export default PersonForm;