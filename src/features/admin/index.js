import "./style.css"
import React ,{useEffect} from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { getproduct } from "../slices/productcSlies";
import { getcategory } from "../slices/categorySlies";
import { pathprivate } from "../../routers/path";
import { useDispatch } from "react-redux";
function Admin() {

  const log = () =>
  {
    localStorage.removeItem("userAdmin");
    window.location.reload();
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getproduct());
    dispatch(getcategory());
  },[dispatch]);

 

  return (
  <div className="adminHome">
    <div className="row wapper">
      <div className="col-2 border nav-admin">
        <div className="d-flex flex-column ">
          <div className="p-2 border-bottom ">
            <img style={{ width: "150px"}} src="http://mauweb.monamedia.net/vienthonga/wp-content/uploads/2018/01/logo-mona-vienthonga.png" alt="Girl in a jacket" />
          </div>
         
            <div className="m-2">
                <ul className="list mt-5" >
                    <NavLink to={pathprivate.Manage} className="nav-links">  
                      <li className="list_item">tổng quan</li>
                    </NavLink> 

                    <NavLink to={pathprivate.AdminOrder} className="nav-links"> 
                      <li className="list_item">quản lý đơn hàng</li>
                    </NavLink> 

                    <NavLink to={pathprivate.ProductAdmin} className="nav-links">    
                          <li className="list_item">quản lý sản phẩm</li>
                    </NavLink> 
                 
                    <NavLink to={pathprivate.CategoryAdmin} className="nav-links">   
                        <li className="list_item">quản lý danh mục</li>
                    </NavLink> 
                  <li className="list_item" onClick={log}>đăng xuất</li>
                </ul>
            </div>
        </div>
      </div>
      <div className="col-10 box-left">
       
           <Outlet></Outlet>
       

      </div>
    </div>
  </div>
  );
}

export default Admin;
