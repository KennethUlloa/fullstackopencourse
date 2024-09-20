import { deletePerson, getAllPersons } from "./services/persons"

const DeleteButton = ({ id, name, setPersons }) => {
    function handleDelete() {
        confirm(`Are you sure you want to delete ${name}?`) &&
        deletePerson(id, (_, error) => {
            if (error) {
                console.log(error);
            } else {
                getAllPersons((persons, error) => {
                    if (error) {
                        console.log(error);
                    } else {
                        setPersons(persons);
                    }
                })}
        })
    }
    return (
        <button onClick={handleDelete}>delete</button>
    )
}

export default DeleteButton