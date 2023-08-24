
import './App.css'
import {IFeriados} from './hooks/services/IFeriados'
import {useEffect,useState} from 'react'
import {MyTable} from './components/MyTable'
import {MyDropDown} from './components/MyDropDown'
import {useFetch} from './hooks/services/useFetch'
import MyImage from './assets/img/itau.png'



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
    const {} = useFetch(newurl,setData,setError);
    
  
},[selected])

  return (
    <div className="container-fluid">
      <img src={MyImage} style={{width:'100px', height:'100px',position:'absolute', top:'5px' , right:'10%'}}></img>
       <h1>POC Feriados</h1>
       <br></br>
       <div className="row"> <h4> Seleccione un año para filtrar: </h4></div>
       <div>
       <MyDropDown selected={selected} setSelectedItem={setSelectedItem} />
       </div>

     <br></br>

     <MyTable data={data}/>
     
     {error && <label>Se produjo un error al llamado del servicio </label>}
    </div>
  )
}

export default App
