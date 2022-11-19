import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteproduct} from "../../slices/productcSlies"
import { Link } from 'react-router-dom';
import { pathprivate ,pathprivateParam } from '../../../routers/path';
import { currencyVND } from '../../Methods';
import "./style.css";


function Product() {

 const [Search , SetSearch ] = useState("");
 const dispatch = useDispatch();
 const productdata = useSelector((state) => state.productApi);

const deleteproducts = (e) =>
{
  dispatch(deleteproduct(e));
}
const handlechange = (e) =>
{
  var value = e.target.value;
  
    SetSearch(value);
    console.log(value);

}


  return (
    <div className="mt-4 " >
    <div className="row justify-content-center ">
      <div className="d-flex flex-column flex-sm-row justify-content-between mb-5 m-2">
        <div className="add_fiter d-flex">
          <input type="text" onChange={handlechange} placeholder="tìm kiếm" className="form-control" />   
        </div>    
        <Link to={pathprivate.ProductAdd} className='nav-link btn btn-outline-primary add_data'>thêm sản phẩm</Link>
      </div>
      <div className="col-sm-12 wapper">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">tên sản phẩm</th>
              <th scope="col">giá</th>
              <th scope="col">giảm giá</th>
              <th scope="col">ảnh</th>
              <th scope="col">danh mục</th>
              <th scope="col">hãng sản xuất</th>
              <th scope="col">số lượng</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>

            {

              productdata.filter((v) => v.name.toLowerCase().includes(Search.toLowerCase()))
                .map(function(data,index){
                    return(
                      <tr key={index}>
                      <td className="cart-rowp">{index}</td>
                      <td className="cart-rowp">{data.name}</td>
                      <td className="cart-rowp">{currencyVND(data.price)+' vnđ'}</td>
                      <td className="cart-rowp">{data.discount}</td>
                      <td className="cart-rowp"><img className="fomat-img w-100" src={data.photoavt} alt="" /></td>
                      <td className="cart-rowp">
                       {data.category}
                      </td>
                      <td className="cart-rowp">{data.hangsx}</td>
                      <td className="cart-rowp">{data.quantity}</td>
                      <td className="cart-rowp">
                      {/* <Link to='/' className='nav-link'>Dashboard</Link> */}
                        <Link to={pathprivateParam.ProductEditParam + data.id} type="button" className="btn btn-info">sửa</Link>
                        <button onClick={()=>deleteproducts(data.id)} type="button" className="btn btn-danger">xóa</button>
                      </td>       
                    </tr>
                    );
                })


            }
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
}

export default Product;
