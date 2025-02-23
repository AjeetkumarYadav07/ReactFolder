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
  }

});

export const{addToCart} = cartSlice.actions;
export default cartSlice.reducer;