import React, {useState, useEffect } from "react";
import servicerorder from "../../../services/servicerorder";
import { useParams } from 'react-router-dom';
import { currencyVND } from "../../Methods";
import './style.css';

function DetailOrder() {
    let { id } = useParams();
    const [order, setorder] = useState({});
    useEffect( () => {
        async function callapi ()
        {
            let getapi  = await servicerorder.get(id);
            let datapi = getapi.data;
            setorder(datapi);
            
        }
       
        callapi();
        
        
    },[]);


var orderdetail = order.cart;





  return (
      <div className="container ">
        <h1 className="mt-5"> mô tả </h1>
      
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">tên sản phẩm</th>
              <th scope="col">ảnh</th>
              <th scope="col">giá</th>
              <th scope="col"> số lượng </th>
            </tr>
          </thead>
          <tbody>
      
            {
                orderdetail === undefined ? <tr></tr> :
                orderdetail.map((data,index)=>
              {
                return(
                  <tr  key={index}>
                  <th id="table_index" scope="row">{index}</th>
                  <td className="cart-row-Order">{data.name}</td>
                  <td  className="cart-row-Order">
                  <img style={{width: "150px"}} alt={data.name} src={data.photoavt} />
                </td>
                  <td className="cart-row-Order">{currencyVND(data.price) + ' vnđ'}</td>
                  <td className="cart-row-Order">{data.totalcart}</td>   
                </tr>
                )
              })

           }
          </tbody>
        </table>
      </div>

  );
}

export default DetailOrder;
