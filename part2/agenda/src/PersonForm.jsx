const PersonForm = ( { persons, setPersons, newName, setNewName, newNumber, setNewNumber}) => {

    function handleSubmit(event) {
        event.preventDefault();
    
        const alreadyRegistered = persons.find(person => person.name === newName);
        if (alreadyRegistered) {
          alert(`${newName} is already added to phonebook`);
          return;
        }
          
        setPersons(persons.concat({ name: newName, number: newNumber, id: persons.length + 1}));
        setNewName('');
        setNewNumber('');
        console.log('submited');
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
    );
}

export default PersonForm;