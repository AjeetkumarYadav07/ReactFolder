import React from 'react'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes , Route} from "react-router-dom" ;

import Cards from './components/Cards';
import CartDetail from './components/CartDetail';
const App = () => {
  return (
    <>
     

     <Header/>
     <Routes>
       <Route path="/" element={<Cards/>} /> 
       <Route path="/cart" element={<CartDetail/>} /> 


     </Routes>
      
    </>
  )
}

export default App