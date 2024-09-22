import { useEffect, useState } from "react";
import { getWeather } from "./services";

const Country = ({ country }) => {
  const [temperature, setTemperature] = useState();
  const [wind, setWind] = useState();
  const [tempUnits, setTempUnits] = useState('');
  const [windUnits, setWindUnits] = useState('');

  const coordinates = {
    latitude: country.latlng[0],
    longitude: country.latlng[1]
  }

  useEffect(() => {
    getWeather(coordinates, (res, err) => {
      if (err) {
        console.log(err);
        return;
      }
      const { current_units } = res;
      const { current } = res;
      console.log(res);
      setTemperature(current.temperature_2m);
      setWind(current.wind_speed_10m);
      setTempUnits(current_units.temperature_2m);
      setWindUnits(current_units.wind_speed_10m);
  })});

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      {
        country.languages &&
        <div>
          <h2>Languages</h2>
          <ul>
            {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
          </ul>
        </div>
      }
      <img className="flag" src={country.flags.png} alt={country.flags.alt} />
      <p>temperature {temperature}{tempUnits}</p>
      <p>wind {wind}{windUnits}</p>
    </div>
  );
}

export default Country;