import axios from "axios";

export function useFetch(url:string,setData:any,setError:any)
{
    axios.get(url).then((response) => {setData(response.data)})
                     .catch(error => {setError(error)});

                     
    return {};

}