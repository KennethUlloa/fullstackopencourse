const CountryList = ({ countries, setSelected }) => {
  return (
    <>
      {countries.map(country => {
        return <div key={country.name.common}>
          {country.name.common} <button onClick={() => setSelected(country)}>show</button></div>
      })}
    </>
  )
}

export default CountryList