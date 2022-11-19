import React from "react";
import { pathpublic , pathprivate } from "./path";
import Homepage from "../features/page/homepage";
import CategoryProduct from "../features/page/categoryproduct/categoryproduct";
import NotFound from "../features/notfile";
import LoadProduct from "../loading/loadproduct";
import Cart from "../features/page/cart";
// import Demo from "../features/notfile/demo";


// admin
import Manage from "../features/admin/manage";
import Product from "../features/admin/crudproduct/product";
import AdminOrder from "../features/admin/order";
import Category from "../features/admin/curdcategory/category";
import Categorycurd from '../features/admin/curdcategory/categotycrud';



const AdminProduct = React.lazy(() => import("../features/admin/crudproduct/curdproduct"));
const DetailOrder = React.lazy(() => import("../features/admin/order/detail"));
const LazyProductDes = React.lazy(() => import("../features/page/productdes"));

 
 const publicRouter = [

    { path:pathpublic.home, component : <Homepage />},
    { path:pathpublic.CategoryProduct, component : <CategoryProduct /> },
    { path:pathpublic.cart, component : <Cart /> },
    { path:pathpublic.NotFound, component : <NotFound />},
    { 
      path:pathpublic.ProductDes,
      component : <React.Suspense fallback={<LoadProduct></LoadProduct>}> <LazyProductDes></LazyProductDes> </React.Suspense>, 
    },
 ]

 const privateRouter = [

   { path:pathprivate.Manage, component : <Manage />  },
   { path:pathprivate.ProductAdmin, component : <Product />  }, 
   { 
    path:pathprivate.ProductAdd,
    component : <React.Suspense fallback={<LoadProduct></LoadProduct>}> <AdminProduct /> </React.Suspense>, 
   },
   { 
    path:pathprivate.ProductEdit,
    component : <React.Suspense fallback={<LoadProduct></LoadProduct>}> <AdminProduct /> </React.Suspense>, 
   },
   { path:pathprivate.AdminOrder, component : <AdminOrder /> }, 
   { 
    path:pathprivate.DetailOrder,
    component : <React.Suspense fallback={<LoadProduct></LoadProduct>}> <DetailOrder /> </React.Suspense>, 
   },
   { path:pathprivate.CategoryAdmin, component : <Category /> }, 
   { path:pathprivate.CategoryAdd, component : <Categorycurd /> }, 
   { 
    path:pathprivate.CategoryEdit,
    component : <React.Suspense fallback={<LoadProduct></LoadProduct>}> <Categorycurd /> </React.Suspense>, 
   },

]






 
export { publicRouter,privateRouter};



