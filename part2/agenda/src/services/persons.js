import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

function processResponse(response, callback) {
    return response
    .then(response => callback(response.data, undefined))
    .catch(error => callback(undefined, error));
}


export function getAllPersons(callback) {
    const response = axios.get(baseUrl)
    return processResponse(response, callback)
}

export function createPerson(person, callback) {
    const response = axios.post(baseUrl, person)
    return processResponse(response, callback)
}

export function deletePerson(id, callback) {
    const response = axios.delete(`${baseUrl}/${id}`)
    return processResponse(response, callback)
}

export function getPerson({id, name}, callback) {
    let response;
    if (id) {
        response = axios.get(`${baseUrl}/${id}`)
    } else if (name) {
        response = axios.get(`${baseUrl}?name=${name}`)
    } else {
        throw new Error('id or name must be provided')
    }
    if (!response) {
        throw new Error('response is undefined')
    }
    return processResponse(response, callback)
}

export function updatePerson(person, callback) {
    const requestUrl = `${baseUrl}/${person.id}`
    console.log('requestUrl', requestUrl)
    const response = axios.put(`${baseUrl}/${person.id}`, person)
    return processResponse(response, callback)
}