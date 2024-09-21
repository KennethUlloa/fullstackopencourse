import Person from "./Person";

const PersonList = ({ persons, filter, setPersons, setNotification }) => {
    const personsToShow = (filter === '') ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
    if (personsToShow.length === 0) {
        return (filter === '') ? <p>No persons to show</p> : <p>No persons to show with filter &apos;{filter}&apos;</p>;
    }

    return (
        <div>
            {
                personsToShow.map(person => <Person key={person.id} person={person} setPersons={setPersons} setNotification={setNotification} />)
            }
        </div>
    );

}

export default PersonList;