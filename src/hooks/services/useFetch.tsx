import {useEffect,useState} from 'react'
import axios from "axios";
import {IFeriados} from './IFeriados.tsx'

export function useFetch(url:string)
{
    const [data, setData] = useState<IFeriados[]>([]);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

     useEffect(()=>{

        setLoading(null);
       
       
    },[])

    return { data, loading, error}

}