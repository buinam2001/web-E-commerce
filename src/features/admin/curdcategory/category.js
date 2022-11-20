import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux";
import {deletecategory} from "../../../redux/slices/categorySlies";
import { pathprivate , pathprivateParam } from '../../../routers/path';
import "./style.css"
function Category() {

  const data = useSelector((state) => state.categoryApi);
  const dispatch = useDispatch();
  const [Search , SetSearch ] = useState("");



  const deletecate = (e) =>
  {
      dispatch(deletecategory(e));
  }


  function ChangeSearch (e)
  {
    var value = e.target.value;
     SetSearch(value);
      console.log(value);
  }


  return (
    <div className="container">
    <div className="row justify-content-center  m-5">
      <div className="d-flex justify-content-between flex-column flex-sm-row  mb-5">
        <div className="add_fiter d-flex ">
          <input onChange={ChangeSearch} placeholder="tìm kiếm danh mục"  type="text" className="form-control" />
        </div>
        <Link to={pathprivate.CategoryAdd} className='nav-link btn btn-outline-primary add_data'>thêm danh mục</Link>
      </div>
      <div className="col-sm-5">
        <table className="table">
          <thead className="thead-light">
            <tr>           
              <th scope="col">danh mục</th>
              <th scope="col"></th>  
            </tr>
          </thead>
          <tbody>
               {   
                  data.filter((v) => v.name.toLowerCase().includes(Search.toLowerCase()))
                 .map((value,index)=>
                 {
                    return<tr key={index}>
                    <td >{value.name}</td>
                    <td >                  
                       <Link to={pathprivateParam.CategoryEditParam + value.id} type="button" className="btn btn-info">sửa</Link>
                       <button onClick={() =>deletecate(value.id)} type="button" className=" btn btn-danger">xóa</button>
                   </td>        
                </tr>     
                 })
                 
                 }   
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
}

export default Category;
