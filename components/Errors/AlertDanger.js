import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const AlertDanger = ({ message }) => {
  return (
    <div className="bg-red-300 p-5 rounded shadow text-red-900">
      <FontAwesomeIcon icon={['fas', 'exclamation-triangle']} size="lg" />
      <strong className="ml-2">
        {message}
      </strong>
    </div>
  )
}

export default AlertDanger