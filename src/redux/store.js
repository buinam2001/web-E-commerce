import { configureStore } from "@reduxjs/toolkit";
import productcurd from '../features/slices/productcSlies';
import categorycurd from "../features/slices/categorySlies";
import cartcurd from ".././features/slices/cartSlies";
import ordercurd from "../features/slices/ordercSlies";
import usercurd from "../features/slices/userSlies"
export default configureStore({
  reducer: {
    productApi: productcurd,
    categoryApi:categorycurd,
    cart :cartcurd,
    orderApi: ordercurd,
    userApi : usercurd
  }
});
