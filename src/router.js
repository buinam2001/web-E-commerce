import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './features/page/homepage';
import Admin from './features/admin';
import Product from './features/admin/crudproduct/product';
import LoadProduct from './loading/loadproduct';
import Category from './features/admin/curdcategory/category';
import Categorycurd from './features/admin/curdcategory/categotycrud';
import CategoryProduct from './features/page/categoryproduct/categoryproduct';
import AdminFrom from "./features/admin/fromAdmin/adminfrom";
import Cart from "./features/page/cart/index";
import AdminOrder from './features/admin/order';
import Manage from "./features/admin/manage/index";
import CurdUser from './features/admin/curduser';
import NotFound from './features/notfile';
const LazyProductDes = React.lazy(() => import("./features/page/productdes/index"));
const AdminProduct = React.lazy(() => import("./features/admin/crudproduct/curdproduct"));
const Page = React.lazy(() => import("./features/page"));
const FromHome = React.lazy(() => import("./features/page/login/index"));
const DetailOrder = React.lazy(() => import("./features/admin/order/detail"));
const userAdmin = JSON.parse(localStorage.getItem('userAdmin'));
const user = JSON.parse(localStorage.getItem('user'));


function Root ()
{
    return(
    

    <Routes>
       < Route path="/"
        element={
          user == null ? 
        <React.Suspense fallback={<LoadProduct></LoadProduct>}>
          <FromHome />
        </React.Suspense> : 
        
        <React.Suspense fallback={<LoadProduct></LoadProduct>}>
          <Page />
        </React.Suspense>
          
        }>

       < Route index element={<Homepage />} ></Route>
       < Route path="/cart" element={<Cart />} ></Route>
       < Route path="/:category" element={<CategoryProduct />} >
       </Route>
       <Route path='*' element={<NotFound />} />
       <Route
              path="/product/:id"
              element={
                <React.Suspense fallback={<LoadProduct></LoadProduct>}>
                  <LazyProductDes />
                </React.Suspense>
              }
            />

       </Route>
     
          <Route path="/admin" element={userAdmin == null ? <AdminFrom></AdminFrom> : <Admin></Admin> }>   
          < Route path="/admin" element={<Manage />} /> 
          < Route path="user" element={<CurdUser />} ></Route> 
          < Route path="product" element={<Product />} ></Route>
            <Route
                path="product/add"
                element={
                  <React.Suspense fallback={<LoadProduct></LoadProduct>}>
                    <AdminProduct />
                  </React.Suspense>
                }
              />
              <Route
                  path="product/edit/:id"
                  element={
                    <React.Suspense fallback={<LoadProduct></LoadProduct>}>
                      <AdminProduct />
                    </React.Suspense>
                  }
                /> 
              < Route path="order" element={<AdminOrder />} >
              </Route>
              < Route path="order/detailorder/:id"           
              element={
                <React.Suspense fallback={<LoadProduct></LoadProduct>}>
                  <DetailOrder />
                </React.Suspense>
              }
              >
            </Route>
          < Route path="category" element={<Category />} />
            
          < Route path="category/add" element={<Categorycurd />} />  
          <Route
              path="category/edit/:id"
              element={
                <React.Suspense fallback={<LoadProduct></LoadProduct>}>
                  <Categorycurd />
                </React.Suspense>
              }
            />  
        </Route>  
    </Routes>
        )
        
}
export default Root;