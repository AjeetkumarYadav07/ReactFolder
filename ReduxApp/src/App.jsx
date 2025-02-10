import React from 'react'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes , Route} from "react-router-dom" ;

import Card from './components/Card';
import CartDetail from './components/CartDetail';
const App = () => {
  return (
    <>
     

     <Header/>
     <Routes>
       <Route path="/" element={<Card/>} /> 
       <Route path="/cart" element={<CartDetail/>} /> 


     </Routes>
      
    </>
  )
}

export default App