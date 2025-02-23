// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Badge from '@mui/material/Badge';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
// import { NavLink } from 'react-router-dom';
// import Cartmenu from './Cartmenu'; // Ensure this file exists

// const Header = () => {
//   return (
//     <Navbar bg="dark" data-bs-theme="dark" expand="lg">
//       <Container>
//         {/* Brand or Title */}
//         <Navbar.Brand>
//           <NavLink to="/" className="text-decoration-none text-light mx-3">
//             Add To Cart
//           </NavLink>
//         </Navbar.Brand>

//         {/* Navbar Toggle for Mobile */}
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />

//         {/* Navbar Items */}
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <NavLink to="/" className="nav-link text-light mx-2">
//               Home
//             </NavLink>
//           </Nav>
//         </Navbar.Collapse>

//         {/* Cartmenu Component */}
//         <Cartmenu />
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;


import React from 'react'

import Menu from './NavBar/Menu'

const Header = () => {
  return (
    <>
     <Menu/>
     

     
    </>
  )
}

export default Header
