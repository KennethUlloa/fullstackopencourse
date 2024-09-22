import axios from 'axios';

const COUNTRY_API = 'https://restcountries.com/v3.1';
const WEATHER_API = 'https://api.open-meteo.com/v1';

function processResponse(response, callback) {
    return response
    .then(response => callback(response.data, undefined))
    .catch(error => callback(undefined, error));
}

export function getCountries(name, callback) {
    const response = axios.get(`${COUNTRY_API}/name/${name}`);
    return processResponse(response, callback);
}

export function getWeather({longitude, latitude}, callback) {
    const response = axios.get(`${WEATHER_API}/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`);
    return processResponse(response, callback);
}
