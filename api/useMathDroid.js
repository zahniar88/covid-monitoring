import Axios from "axios"
import { useEffect, useState } from "react"

const useMathDroid = (url = '') => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const dataUrl = "https://covid19.mathdro.id/api/" + url

  useEffect(() => {
    const fetchData = async () => {
      setError(null)

      // get data with axios
      await Axios.get(dataUrl).then(res => {
        setLoading(false)
        setData(res.data)
      }).catch(err => {
        setLoading(false)
        // setError(err.response.data.error)
        console.log(err.response);
      })
    } // end fetchData

    setLoading(true)
    fetchData()
  }, [dataUrl])

  return {data, error, loading}
}

export default useMathDroid