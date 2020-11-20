import moment from "moment"
import { useState } from "react"
import useMathDroid from "../../api/useMathDroid"
import AlertDanger from "../Errors/AlertDanger"
import LoadingWidget from "../Loading/LoadingWidget"
import ListData from './ListData'
import SearchBox from "../Covid/SearchBox";

const Lokal = () => {
  const [country, setCountry] = useState('indonesia')
  const lokal = useMathDroid('countries/' + country)

  const handleSelect = (e) => {
    setCountry(e.target.value)
  }

  return (
    <div className="mb-5">

      {/* select countries */}
      <div className="text-center mb-5">
        <SearchBox country={country} handleSelect={handleSelect} />

        {(lokal.data) && 
          <p className="text-teal-700">
            Last Updated : {moment(lokal.data.lastUpdate).format('DD MMM YYYY, HH:mm')}
          </p>
        }
      </div>
        
      {/* list data */}
      {(lokal.loading) && <LoadingWidget />}
      {(lokal.error) && <AlertDanger message={lokal.error.message} />}
      {
        (lokal.data) &&
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