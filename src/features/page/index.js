import React ,{useEffect} from "react";
import Header from "./layout/header";
import Footer from "./layout/footer";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { getproduct } from "../slices/productcSlies";
import { getcategory } from "../slices/categorySlies";


function Page() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getproduct());     
        dispatch(getcategory());
      },[dispatch]);
      
 return (
     <div style={{overflowX: "hidden"}}>
         <Header></Header>
          <div style={{marginTop:'131px'}}>
            <Outlet></Outlet>
         </div>
         <Footer></Footer>
     </div>
    );
  }
  
  export default Page;
  