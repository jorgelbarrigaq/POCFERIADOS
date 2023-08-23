
import './App.css'
import { useFetch  } from './hooks/services/useFetch'


function App() {
  const {data, loading, error} = useFetch(import.meta.env.VITE_PATH_API);

  console.log(data);
  console.log(loading);
  console.log(error);
  
  return (
    <>
     <h1>Hola Mundo</h1>
    </>
  )
}

export default App
