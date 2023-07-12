import { useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/Api";

const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
      setData("")
      setError("")
      setLoading("loading...");

      fetchDataFromApi(url)
      .then(res =>{
        setData(res)
        setLoading("")
      })
      .catch(err =>{
        setLoading("")
        setError("Something went wrong ");
      })

    }, [url])
    
    return { data, loading, error };

}
export default useFetch;