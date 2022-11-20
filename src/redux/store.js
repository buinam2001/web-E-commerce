import { configureStore } from "@reduxjs/toolkit";
import productcurd from './slices/productcSlies';
import categorycurd from "./slices/categorySlies";
import cartcurd from "./slices/cartSlies";
import ordercurd from "./slices/ordercSlies";
export default configureStore({
  reducer: {
    productApi: productcurd,
    categoryApi:categorycurd,
    cart :cartcurd,
    orderApi: ordercurd,
  }
});
