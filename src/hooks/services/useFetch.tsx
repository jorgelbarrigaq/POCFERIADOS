import {useEffect,useState} from 'react'
import axios from "axios";

export function useFetch(url:any)
{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

     useEffect(()=>{

        setLoading(null);
        axios.get(url).then((response) => {
            setData(response.data);
          }).catch(error => {
            setError(error);
          });
       
    },[])

    return { data, loading, error}

}