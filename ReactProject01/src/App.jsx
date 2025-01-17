import { useState , useCallback } from 'react'
 
import './App.css'

function App() {
  const [lenght  , setLenght] = useState(8 );
  const [useNumer , setNumer] = useState(false);
 const [usechar , setChar] = useState(false)

 const [password , setPassword] = useState("")
 const passwordGenerator = useCallback ( fn , [lenght , useNumer , usechar , ])
  return (
    <>
     <div>
        <h1>hy</h1>
     </div>
    </>
  )
}

export default App
