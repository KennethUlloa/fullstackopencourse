import Person from "./Person";

const PersonList = ({ persons, setPersons, filter }) => {
    const personsToShow = (filter === '') ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
    return (
        <div>
            {
                personsToShow.map(person => <Person key={person.id} person={person} setPersons={setPersons} />)
            }
        </div>
    );
}

export default PersonList;