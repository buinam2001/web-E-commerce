import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import serviceruser from "../../services/serviceruser";


const initialState = [];

export const getuser = createAsyncThunk(
    "user/get",
    async () => {
      const res = await serviceruser.getAll();
      return res.data;
    }
  );

  export const deleteuser = createAsyncThunk(
    "user/delete",
    async (id) => {
      await serviceruser.remove(id);
      return id;
    }
  ); 
 
  



const usercurd = createSlice({
  name: "user",
  initialState,
  extraReducers: {
   
    [getuser.fulfilled]: (state, action) => {
      return [...action.payload];
    },

    [deleteuser.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },


   
  },
});
export default usercurd.reducer