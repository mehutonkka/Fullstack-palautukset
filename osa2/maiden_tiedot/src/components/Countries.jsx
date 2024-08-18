import { useState } from "react"

const Country = ({country}) => {
    return (
        <>
          <h2>{country.name.common}</h2>
          <p>capital {country.capital}</p>
          <p>area {country.area}</p>
          <h4>languages:</h4>
          <ul>
            {Object.entries(country.languages).map(([key, language])=>
              <li key={key}>
                {language}
              </li>
            )}
          </ul>
          <img src={country.flags.png} alt="flag" />
            
        </>
  
    )
  }
  
  
  const Countries = ({countries, filter, selectedCountry, setSelectedCountry}) => {
    


  if (countries.length > 10 || filter === '')  {
    return (
      <>
      <p>Too many matches, specify another filter</p>
      </>
    )
  } if (countries.length === 1) {
    return(
    <>
        <Country country={countries[0]}/>
    </>
    )
  } 

  const handleClick = (country) => {
    setSelectedCountry(country)
  }
  
  return(
    <>
    {selectedCountry ? (
        <Country country={selectedCountry} />
    ) : (
    <>
      {countries.map(country => (
               <p key={country.cca3}>
                {country.name.common} 
                <button onClick={() => handleClick(country)}>show</button>
            </p>
        
    
       ))}
      </>
    )}
    </>
  )
}



  export default Countries