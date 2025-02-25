import {createSlice} from '@reduxjs/toolkit';
import { act } from 'react';

//create variblle for statemangement 
const initialState = {
    carts:[]
}

//card slice
const cartSlice = createSlice ({
  name:"cartslice",
  initialState,
  reducers:{


    // creatiing action 
    addToCart:(state , action)=>{
 
      const itemIndex = state.carts.findIndex((iteam) => iteam.id === action.payload.id );

      if(itemIndex >=0){
        state.carts[itemIndex].qnty +=1;

      }
      else{
        const temp = {...action.payload, qnty: 1}
        state.carts = [...state.carts , temp]
      }

      // state.carts = [...state.carts , action.payload]


    }
    ,

    //remove to cart
    removeToCart:(state , action)=>{
       const data = state.carts.filter((ele)=> ele.id !== action.payload);

       state.carts = data
      
    }
    ,

    removeSingleItem:(state ,action)=>{
      const itemIndex_del = state.carts.findIndex((itm) => itm.id == action.payload.id);

      if( state.carts [itemIndex_del].qnty >=1 ){
        state.carts[itemIndex_del].qnty  -= 1
      }
    }
    ,

    emptyCart:(state , action) =>{
      state.carts = []
    }
  }

});

export const{addToCart , removeToCart, removeSingleItem , emptyCart} = cartSlice.actions;
export default cartSlice.reducer;