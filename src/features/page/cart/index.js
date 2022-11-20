import React, { useEffect }  from "react";
import { createorder } from "../../../redux/slices/ordercSlies";
import { useDispatch , useSelector} from "react-redux";
import { BsFillBackspaceFill } from "react-icons/bs";
import { DecreaseQuantity, IncreaseQuantity , removecart } from "../../../redux/slices/cartSlies";
import { currencyVND } from "../../Methods";
import "./style.css";

const Cart = () =>
{
 
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  useEffect(()=>
  {
    window.scrollTo(0,0);
  },[])

  const pushvalue = (e) =>
  {
    e.preventDefault();
    let data = e.target;

    let valuefrom =
    {
        name: data.fullname.value,
        address :data.address.value,
        phone:data.phone.value,
        email:data.email.value,
        note:data.note.value,
    }

  const order = {valuefrom, cart ,totalorder:total};
  dispatch(createorder(order));
    
  }
  const handledelete = (data)=>
      {
          
            let id = data.id;
            dispatch(removecart(id));   
  }


  let totalprice = 0;
  const sumlistcart = (p,l) =>
        {
             totalprice = p * l
             return currencyVND(totalprice) + ' vnđ'
             
          
  }


  let total = 0;
  for (let i = 0; i < cart.length;i++){
          let price = +cart[i].price * cart[i].totalcart ;
           total += price;
      
  }
      


return(
      
     
 <div className="container mt-5">
     <h3>thông tin giỏ hàng </h3>
  <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">TÊN SẢN PHẨM</th>
        <th scope="col">ẢNH PHẨM</th>
        <th scope="col">GIÁ</th>
        <th scope="col">SỐ LƯỢNG</th>
        <th scope="col">TỔNG GIÁ SẢN PHẨM </th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>


      {

      cart ? cart.map((data,index)=>
              {
                return(
              <tr key={data.id} >
                <td  className="cart-row">{index+1}</td>
                <td  className="cart-row">{data.name}</td>
                <td className="cart-row"><img width="100px" src={data.photoavt} alt="nnaam" /></td>
                <td className="cart-row">{currencyVND(data.price)+' vnđ'}</td>
                <td className="cart-row" >
                <span className="btn btn-primary" style={{margin:'2px'}}  onClick={()=>dispatch(DecreaseQuantity(data)) }>-</span>
                    <span className="btn btn-info">{data.totalcart}</span>
              <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>dispatch(IncreaseQuantity(data)) } >+</span>
                </td>
                <td className="cart-row">{sumlistcart(data.price,data.totalcart)}</td>
                <td  className="cart-row" onClick={()=>handledelete(data)}  style={{ color: "red" }} ><BsFillBackspaceFill></BsFillBackspaceFill></td>
              </tr>        
              );
              })
                :'chưa có sản phẩm '  
            }
     
    </tbody>  
  </table>

    <h5 className="m-5">tổng tiền : {currencyVND(total) + ' VNĐ' } </h5>

    <h3>thông tin thanh toán </h3>
    <div>
      <form className="payfrom" onSubmit={pushvalue}>
        <div className="form-row">
          <div className="col-12 mb-3">
            <label htmlFor="validationDefault01">họ và tên </label>
            <input name="fullname" type="text" className="form-control" id="validationDefault01" placeholder="họ và tên" required />
          </div>
        </div>
        <div className="form-row">
          <div className="col-12 mb-3">
            <label htmlFor="validationDefault03">địa chỉ</label>
            <input type="text" name="address" className="form-control" id="validationDefault03" placeholder="địa chỉ " required />
          </div>
          <div className="col-12 mb-4">
            <label htmlFor="validationDefault04">số điện thoại</label>
            <input type="text" name="phone" className="form-control" id="validationDefault04" placeholder="số điện thoại" required />
          </div>
          <div className="col-12 mb-4">
            <label htmlFor="validationDefault05">email</label>
            <input type="text" name="email" className="form-control" id="validationDefault05" placeholder="email" required />
          </div>
        </div>
        <label htmlFor="validationDefault05" >Ghi chú đơn hàng</label><br />
        <textarea className="textfrom" name="note" rows={9} cols={40}  />  <br />
        <button type="submit" className="btn btn-outline-success">thanh toán</button>
      </form>
    </div>
</div>

  )
 

  
}

export default Cart;