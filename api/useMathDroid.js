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
      setData(null)

      // get data with axios
      await Axios.get(dataUrl).then(res => {
        setData(res.data)
        setLoading(false)
      }).catch(err => {
        setError(err.response.data.error)
        setLoading(false)
      })
    } // end fetchData

    setLoading(true)
    fetchData()
  }, [dataUrl])

  return {data, error, loading}
}

export default useMathDroid