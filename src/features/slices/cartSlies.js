import { createSlice } from "@reduxjs/toolkit";

var data  = localStorage.getItem('cart');
 var dataobj = JSON.parse(data);
const initialState = dataobj ? dataobj : [];

const cartcurd = createSlice({
  name: "cart",
  initialState,

  reducers:
  {
      addcart(state, action)
      {
        let index = state.findIndex(cartobj => cartobj.id === action.payload.id);
        if (index === -1) {
          state.push(action.payload);
        }
        else
        { 
          state[index].totalcart +=1;
        }
        localStorage.setItem('cart',JSON.stringify([...state]));
      },
      removecart(state, action)
      {

        let index = state.findIndex((data) => data.id === action.payload);
        state.splice(index, 1);
        localStorage.removeItem("cart");
        localStorage.setItem('cart',JSON.stringify([...state]));
      },  
      DecreaseQuantity(state, action)
      {
        let index = state.findIndex(({ id }) => id === action.payload.id);
        if(state[index].totalcart < 1)
        {
          state[index].totalcart =1;
        }
        else
        {
          state[index].totalcart -=1;
        }
        localStorage.setItem('cart',JSON.stringify([...state]));
      
      },
      IncreaseQuantity(state, action)
      {
        let index = state.findIndex(({ id }) => id === action.payload.id);
        state[index].totalcart +=1;
        localStorage.setItem('cart',JSON.stringify([...state]));
      
      },
      
  },

  
});

const {actions ,reducer} = cartcurd;
export const {addcart,removecart ,editcart ,DecreaseQuantity ,IncreaseQuantity} = actions

export default reducer;