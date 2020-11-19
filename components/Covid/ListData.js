import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import numeral from 'numeral'

const ListData = ({ icon, title, count, bgColor }) => {
  return (
    <div className="col-span-1">
      
      <div className={`flex space-x-5 items-center ${bgColor} text-white py-5 px-8 rounded shadow`}>
        <div className="pr-3">
          <FontAwesomeIcon icon={['fas', icon]} size="3x" className="text-yellow-300" />
        </div>
        <div className="flex flex-col w-full">
          <div className="text-base font-semibold">Total {title}</div>
          <div className="font-bold text-2xl">
            {numeral(count).format('0,0')}
          </div>
          <div className="font-medium">Orang</div>
        </div>
      </div>

    </div>
  )
}

export default ListData