import React, { useState } from 'react' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const ShoppingCart = () => {
   
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
  
  return (
    <>
     <Badge badgeContent={4} color="primary"
     
     id="demo-positioned-button"
     aria-controls={open ? 'demo-positioned-menu' : undefined}
     aria-haspopup="true"
     aria-expanded={open ? 'true' : undefined}
     onClick={handleClick}
     >
     <FontAwesomeIcon icon={faCartShopping}  className='text-light  ' fontSize= "25px" cursor="pointer" />

    </Badge>

    <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
          <p>Cart Is empty</p>
      </Menu>

    </>
  )
}

export default ShoppingCart;