import { deletePerson, getAllPersons } from "./services/persons"

const DeleteButton = ({ id, name, setPersons, setNotification }) => {
    function handleDelete() {
        confirm(`Are you sure you want to delete ${name}?`) &&
        deletePerson(id, (_, error) => {
            if (error) {
                console.log(error);
                setNotification({message: `Error on service: ${error.code}`, type: 'error'});
            } else {
                getAllPersons((persons, error) => {
                    if (error) {
                        console.log(error);
                        setNotification({message: `Error on service: ${error.code}`, type: 'error'});
                    } else {
                        setPersons(persons);
                        setNotification({message: `Deleted ${name}`, type: 'success'});
                    }
                })}
        })
    }
    return (
        <button onClick={handleDelete}>delete</button>
    )
}

export default DeleteButton