import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import servicerorder from "../../services/servicerorder";


const initialState = [];

export const getorder = createAsyncThunk(
    "order/get",
    async () => {
      const res = await servicerorder.getAll();
      return res.data;
    }
  );
   
  export const createorder = createAsyncThunk(
    "order/create",
    async (data) => {
     
      const res = await servicerorder.create(data);
      alert('đã gửi đơn hàng');
      localStorage.removeItem("cart");
      window.location.reload();
      return res.data;
    }
  );

  export const deleteorder = createAsyncThunk(
    "order/delete",
    async (id) => {
      await servicerorder.remove(id);
      return id;
    }
  ); 

  



const ordercurd = createSlice({
  name: "order",
  initialState,
  extraReducers: {
   
    [getorder.fulfilled]: (state, action) => {
      return [...action.payload];
    },

    [createorder.fulfilled]: (state, action) => {
         state.push(action.payload);
    },
    [deleteorder.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },

    

   
  },
});
export default ordercurd.reducer