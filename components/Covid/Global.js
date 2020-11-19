import moment from "moment";
import useMathDroid from "../../api/useMathDroid";
import AlertDanger from "../Errors/AlertDanger";
import LoadingWidget from "../Loading/LoadingWidget";
import ListData from "./ListData";

const Global = () => {
  const global = useMathDroid()

  return (
    <div className="mb-20">

      <h3 className="text-center font-bold text-lg">Global Case</h3>
      <p className="text-center text-teal-700 mb-5">
        Last updated : {(global.data) && 
        <span>{moment(global.data.lastUpdate).format('DD MMM YYYY, HH:mm')}</span>}
      </p>

      {(global.loading) && <LoadingWidget />}
      {(global.error && !global.loading) && <AlertDanger message={global.error.message} />}

      {
        (global.data && !global.loading && !global.error) &&
        <div className="grid gap-3 grid-cols-1 md:grid-cols-3">
          <ListData 
            title="Sembuh" 
            count={global.data.recovered.value} 
            icon="smile" 
            bgColor="bg-teal-500" />
          
          <ListData 
            title="Positif" 
            count={global.data.confirmed.value} 
            icon="frown" 
            bgColor="bg-indigo-500" />
          
          <ListData 
            title="Meninggal" 
            count={global.data.deaths.value} 
            icon="sad-cry" 
            bgColor="bg-red-500" />
        </div>
      }

    </div>
  )
}

export default Global