import Person from "./Person";

const Persons = ({persons, filter}) => {
    return (
        (filter === '') ? 
        persons.map(person => <Person key={person.id} person={person} />) :

        persons.filter(person => 
            person.name.toLowerCase().includes(filter.toLowerCase()))
            .map(person => <Person key={person.id} person={person} />)
    );
}

export default Persons;