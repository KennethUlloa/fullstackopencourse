import DeleteButton from "./DeleteBotton";

const Person = ({ person, setPersons }) => {
    return (
        <p>
            {person.name} {person.number} <DeleteButton id={person.id} name={person.name} setPersons={setPersons}/>
        </p>
    );
}

export default Person;