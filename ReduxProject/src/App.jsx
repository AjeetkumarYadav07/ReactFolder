

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Home from './components/Home';
import { Routes , Route } from 'react-router-dom';
import CardDetails from './components/CardDetails';



function App() {
 

  return (
    <>

    <Header/>

     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path= 'cart' element={<CardDetails/>} />
    </Routes>
     
  
    </>
  )
}

export default App
