import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import * as router from './routers/index';
import { Routes, Route } from 'react-router-dom';
import LoadProduct from './loading/loadproduct';
import Admin from './features/admin';
import AdminFrom from './features/admin/fromAdmin/adminfrom';
import { pathpublic , pathprivate } from './routers/path';




const FromHome = React.lazy(() => import("./features/page/login"));
const Page = React.lazy(() => import("./features/page"));
const user = JSON.parse(localStorage.getItem('user'));
const userAdmin = JSON.parse(localStorage.getItem('userAdmin'));




function App() {

  return (
      <Routes>  
            <Route path= {pathpublic.home}
                  element={   
                      user === null ? 
                  <React.Suspense fallback={<LoadProduct></LoadProduct>}>
                    <FromHome />
                  </React.Suspense> : 
                  <React.Suspense fallback={<LoadProduct></LoadProduct>}>
                      <Page />
                  </React.Suspense>
                  }> 

                    {
                      router.publicRouter.map((route,index) => {
                          return(
                            < Route key={index} path={route.path} element={route.component}></Route>             
                          )
                      })        
                    }
           </Route> 
           <Route path={pathprivate.Manage} element={userAdmin == null ? <AdminFrom></AdminFrom> : <Admin></Admin> }>  
                  {
                    router.privateRouter.map((route,index) => {
                        return(
                              <Route key={index} path={route.path} element={route.component}></Route>
                            )
                        })        
                 
                  }

          </Route>
     </Routes>
  
  );
}

export default App;


  