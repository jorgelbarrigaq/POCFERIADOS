import {useEffect,useState} from 'react'
import axios from "axios";

export function useFetch(url)
{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

     useEffect(()=>{

        setLoading(true);
        axios.get(url,{ crossdomain: true }).then((response) => {
            setData(response.data);
          }).catch(error => {
            setError(error);
          });
       
    },[])

    return { data, loading, error}

}