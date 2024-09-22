import { useState } from 'react'
import { getCountries } from './services'
import CountryList from './CountryList';
import Country from './Country';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getCountries(search, (res, err) => {
      if (err) {
        console.log(err)
        return
      }
      console.log(res);
      setCountries(res)
      if (res.length === 1) {
        setSelectedCountry(res[0])
      } else {
        setSelectedCountry(null)
      }
    })
    
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      Find countries: <input value={search} onChange={handleSearchChange} />
    </form>
    { 
      (selectedCountry) ? <Country country={selectedCountry} /> :
      (countries.length > 10) ? <p>Too many matches, specify another filter</p> :
      (countries.length > 1) ? <CountryList countries={countries} setSelected={setSelectedCountry} /> : null
    }
    </>
  )
  
}

export default App
