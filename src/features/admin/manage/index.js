import React, { useEffect } from "react";
import "./style.css"
import {useDispatch , useSelector } from "react-redux";
import { FcKindle,FcViewDetails,FcPaid } from "react-icons/fc";
import {MdOutlineProductionQuantityLimits } from "react-icons/md";
import {BiLogInCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { getorder } from "../../../redux/slices/ordercSlies";
// import {getuser } from "../../slices/userSlies";
import { pathprivate } from "../../../routers/path";

function Manage() {


  const dataorder = useSelector((state) => state.orderApi);
  const dispatch = useDispatch();


  useEffect(() => {
  
       dispatch(getorder());

 
     // eslint-disable-next-line react-hooks/exhaustive-deps
   },[]);

   
  function handleLogout() {

        localStorage.removeItem("userAdmin");
        window.location.reload();
    
  }

return (
<div className="container mt-5">

  <div className="row"> 
  <div className="col-11 col-md-5 text-center m-4 box box-s">
      <Link style={{textDecoration:"none",color:"black"}} to={pathprivate.AdminOrder}>
             tổng số đơn hàng :
           {dataorder.length}
          <div className="main">   
          <FcKindle></FcKindle>
          </div>
      </Link>
    </div>


  

    <div className="col-11 col-md-5 text-center m-4 box box-s">
    <Link style={{textDecoration:"none",color:"black"}} to={pathprivate.AdminOrder}>
         quản lý đơn hàng
      <div className="main">
        <FcPaid></FcPaid> 
      </div>
      </Link>
    </div>

    <div className="col-11 col-md-5 text-center m-4 box box-s">
    <Link style={{textDecoration:"none",color:"black"}} to={pathprivate.ProductAdmin}>
      quản lý sản phẩm
      <div className="main">
      <MdOutlineProductionQuantityLimits></MdOutlineProductionQuantityLimits>
       </div>
      </Link>
    </div>

   
    
        <div className="col-11 col-md-5 text-center m-4 box box-s">
        <Link style={{textDecoration:"none",color:"black"}} to={pathprivate.CategoryAdmin}>
            quản lý danh mục
          <div className="main">
              <FcViewDetails></FcViewDetails>
          </div>
        </Link>
        </div>

        




        <div onClick={handleLogout} className="col-11 col-md-5 text-center m-4 box box-s">
            <div style={{textDecoration:"none",color:"black"}} >
                    đăng xuất
              <div className="main">
                <BiLogInCircle></BiLogInCircle>
              </div>
            </div>
        </div>



    </div>
</div>



    
  );
}

export default Manage;
