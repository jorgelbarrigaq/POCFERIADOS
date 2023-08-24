import axios from "axios";
import {IFeriados} from './IFeriados'

export function useFetch(url:string,setData:any,setError:any)
{
   

    console.log(url);

    axios.get(url).then((response) => {setData(response.data)})
                     .catch(error => {setError(error)});

                     
    return {};

}