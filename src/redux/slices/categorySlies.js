import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import servicerCategory from "../../services/servicercategory";


const initialState = [];

export const getcategory = createAsyncThunk(
    "category/get",
    async () => {
      const res = await servicerCategory.getAll();
      return res.data;
    }
  );
   
  export const createcategory = createAsyncThunk(
    "category/create",
    async ({name}) => {
      const res = await servicerCategory.create({name});
      return res.data;
    }
  );

  export const deletecategory = createAsyncThunk(
    "category/delete",
    async (id) => {
      await servicerCategory.remove(id);
      return id;
    }
  ); 


  export const updateproduct = createAsyncThunk(
    "category/update",
    async ({id,name}) => {
    
      const res = await servicerCategory.update(id,{name});
      return res.data;
    }
  );
  



const categorycurd = createSlice({
  name: "category",
  initialState,
  extraReducers: {
   
    [getcategory.fulfilled]: (state, action) => {
      return [...action.payload];
    },

    [createcategory.fulfilled]: (state, action) => {
         state.push(action.payload);
    },
    
    [deletecategory.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },
    
    [updateproduct.fulfilled]: (state, action) => {
      const index = state.findIndex(product => product.id === action.payload.id);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },
    

   
  },
});
export default categorycurd.reducer