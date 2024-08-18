import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import FilterForm from './components/Filter'




const App = () => {
  const [countries, setCountries] = useState([]) 
  const [filtCountries, setFiltCountries] = useState(countries)
  const [newFilter, setNewFilter] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)



  useEffect(() => {
      console.log(`searching with ${newFilter}`)
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then(response => {
          setCountries(response.data)
          setSelectedCountry(null)
        })
    
  }, [newFilter])



  const handleFilterInput = (event) => {
    const searchFilter = event.target.value
    setNewFilter(searchFilter)
    const filtered = countries.filter((country) => 
    country.name.common.toLowerCase().includes(searchFilter.toLowerCase())
  )
    setFiltCountries(filtered)
  }



  return (
    <div>
        <FilterForm newFilter={newFilter} handleFilterInput={handleFilterInput} />
        <Countries countries={filtCountries} filter={newFilter} 
        selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry}/>
    </div>
  )

}

export default App


