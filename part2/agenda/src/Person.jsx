import DeleteButton from "./DeleteBotton";

const Person = ({ person, setPersons, setNotification }) => {
    return (
        <p>
            {person.name} {person.number} <DeleteButton id={person.id} name={person.name} setPersons={setPersons} setNotification={setNotification}/>
        </p>
    );
}

export default Person;