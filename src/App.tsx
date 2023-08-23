
import './App.css'
import {IFeriados} from './hooks/services/IFeriados'
import {useEffect,useState} from 'react'
import axios from "axios";



function App() {

  const options = [
    {key: '-1', value: '', text: '--Choose an option--'},
    {key: '1',value: '2023', text: '2023'},
    {key: '2',value: '2022', text: '2022'},
    {key: '3',value: '2021', text: '2021'},
  ];


  const URL= import.meta.env.VITE_PATH_API;
  const [selected, setSelectedItem] = useState(options[1].value)

  const [data, setData] = useState<IFeriados[]>([]);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const newurl=URL + "/" + selected;
    axios.get(newurl).then((response) => {setData(response.data)})
                     .catch(error => {setError(error);});

},[selected])

  const handleChange = (e:any) => {
    setSelectedItem(e.target.value);
  }


  return (
    <div className="container-fluid">
       <h1>POC Feriados</h1>
       <br></br>
       <div className="row"> <h4> Escoja el año para filtrar los feriados: </h4></div>
       <div>
       <select className="form-select" value={selected} onChange={handleChange}>
       {options.map(option => (
          <option key={option.key} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
       </div>

     <br></br>
     <table className="table">
      <tbody>
      {data.map(feriados => (
                <tr>
                   <td> <span>{feriados.fecha}</span></td>
                   <td> <span>{feriados.nombre}</span></td>
                </tr>
            ))}
            

      </tbody>
     </table>
     {error && <label>Se produjo un error al llamado del servicio </label>}
    </div>
  )
}

export default App
