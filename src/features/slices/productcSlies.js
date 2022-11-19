import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from "../../services/servicesProduct";


const initialState = [];

export const getproduct = createAsyncThunk(
    "Product/get",
    async () => {
      const res = await ProductService.getAll();
      return res.data;
    }
  );
   
  export const createproduct = createAsyncThunk(
    "Product/create",
    async ({ 
      name, 
      price,
      discount,
      photoavt,
      photodes,
      des,
      category,
      quantity,
      hangsx 
    }) => {
      const res = await ProductService.create({ name,price,discount,photoavt,photodes,des,category,quantity,hangsx });
      return res.data;
    }
  );

  export const deleteproduct = createAsyncThunk(
    "Product/delete",
    async (id) => {
      await ProductService.remove(id);
      return id;
    }
  ); 
  export const updateproduct = createAsyncThunk(
    "product/update",
    async ({id, data }) => {
  
      const res = await ProductService.update(id,data);
      return res.data;
   
    }
  );
  

const productcurd = createSlice({
  name: "Product",
  initialState,
  extraReducers: {
   
    [getproduct.fulfilled]: (state, action) => {
      return [...action.payload];
    },

    [createproduct.fulfilled]: (state, action) => {
         state.push(action.payload);
    },
    [deleteproduct.fulfilled]: (state, action) => {
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

export default productcurd.reducer