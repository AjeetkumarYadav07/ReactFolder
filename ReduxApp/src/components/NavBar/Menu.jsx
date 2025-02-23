import React from 'react'
import {Navbar , Nav , Container, NavLink} from 'react-bootstrap'; 

import ShoppingCart from './ShoppinCat';
const Menu = () => {
  return (
    <>
     {/* <h1>helo im menu </h1> */}
     <Navbar bg="dark" data-bs-theme="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to= "/"  className='text-light'> Add to Cart</NavLink>
          <Nav className="me-auto">
            <Nav.Link to = "/cart" >Home</Nav.Link>
           
          </Nav>
          <ShoppingCart/>
        </Container>
      </Navbar>
    </>
  )
}

export default Menu