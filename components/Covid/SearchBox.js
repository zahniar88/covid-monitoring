import useMathDroid from "../../api/useMathDroid";

const SearchBox = (props) => {
  const countries = useMathDroid('countries')

  return (
    <select
      name="country"
      value={props.country}
      onChange={props.handleSelect} 
      className="px-3 py-2 border-2 rounded bg-white border-white font-bold max-w-full mb-1 outline-none focus:border-teal-700 focus:bg-transparent">
      {
        (countries.data) && countries.data.countries.map(country => 
          <option key={country.name} value={country.name.toLowerCase()}>{country.iso2} - {country.name}</option>
        )
      }
    </select>
  )
}

export default SearchBox