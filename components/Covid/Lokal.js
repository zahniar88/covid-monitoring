import moment from "moment"
import { useState } from "react"
import useMathDroid from "../../api/useMathDroid"
import AlertDanger from "../Errors/AlertDanger"
import LoadingWidget from "../Loading/LoadingWidget"
import ListData from './ListData'

const Lokal = () => {
  const [country, setCountry] = useState('indonesia')
  const lokal = useMathDroid('countries/' + country)
  const countries = useMathDroid('countries')

  return (
    <div className="mb-5">

      {/* select countries */}
      <div className="text-center mb-5">
        <select
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)} 
          className="px-3 py-2 border-2 rounded bg-white border-white font-bold max-w-full mb-1 outline-none focus:border-teal-700 focus:bg-transparent">
          {
            (countries.data) && countries.data.countries.map(country => 
              <option key={country.name} value={country.name.toLowerCase()}>{country.iso2} - {country.name}</option>
            )
          }
        </select>
        
        {(lokal.data) && 
          <p className="text-teal-700">
            Last Updated : {moment(lokal.data.lastUpdate).format('DD MMM YYYY, HH:mm')}
          </p>
        }
      </div>
      {/* end select countries */}
      
      {(lokal.loading) && <LoadingWidget />}
      {(lokal.error && !lokal.loading) && <AlertDanger message={lokal.error.message} />}
      {
        (lokal.data && !lokal.error && !lokal.loading) &&
        <div className="grid gap-3 grid-cols-1 md:grid-cols-3">
          <ListData 
            title="Sembuh" 
            count={lokal.data.recovered.value} 
            icon="smile" 
            bgColor="bg-teal-500" />
          
          <ListData 
            title="Positif" 
            count={lokal.data.confirmed.value} 
            icon="frown" 
            bgColor="bg-indigo-500" />
          
          <ListData 
            title="Meninggal" 
            count={lokal.data.deaths.value} 
            icon="sad-cry" 
            bgColor="bg-red-500" />
        </div>
      }

    </div>
  )
}

export default Lokal