import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import {useSelector} from 'react-redux';
import { NavLink, useLocation } from "react-router-dom";



const Header = () => {

  const {carts} = useSelector((state ,)=> state.allCart);
    // console.log(carts);
    const location = useLocation();

  
  return (
    <>
      <Navbar
        style={{ height: "60px", backgroundColor: "black", color: "white" }}>
        <Container>
          
          <NavLink to="/" className="text-decoration-none text-light mx-2">
          {location.pathname == "/cart"?(
              <h3 className="text-light  "> Back To Home</h3>
          ):(
            <h3 className="text-light "> Ecommerce</h3>
          )}
         
          </NavLink>
         
         <NavLink to="/cart" className='text-decoration-none text-light mx-2 '>
         <div id="ex4" class="cart">
             <span className="p1 fa-stack fa-2x has-badge" data-count={carts.length} >
             <i class="fa-solid fa-cart-shopping"></i>
             </span>
           </div>
         </NavLink>
         
         
          
          
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
