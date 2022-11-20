import React,{useEffect} from 'react';
import "./style.css"
import { useParams } from 'react-router-dom'
import { useSelector , useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { addcart } from "../../../redux/slices/cartSlies";
import { pathpublic } from '../../../routers/path';
import { loc_xoa_dau , currencyVND } from '../../Methods';

function Productdes() {
    let { id } = useParams();
    const data = useSelector((state) => state.productApi);
    let product;
    const dispatch = useDispatch();
    for(let i = 0 ; i<data.length ; i++)
    {
        if(data[i].id === +id )
        {
          product = data[i];
        }

    }
    const card = ()=>
    {
     
       let newdata = {...product , totalcart: 1}
       dispatch(addcart(newdata));
      
   
   
    }
    useEffect(() => {
           
      window.scrollTo(0,0);
    },[]); 
    
 return (

   product !== undefined ? <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card mb-3 card_none" style={{maxWidth: '100%'}}>
              <div className="row g-0">
                <div className="col-md-7">
                  <img style={{maxWidth: '100%'}} src={product.photoavt} alt="..." />         
                </div>
                <div className="col-md-5 mt-5">
                  <div className="card-body">
                    <div className="card-category">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item "><Link to={pathpublic.home}>TRANG CHỦ</Link></li>
                          <li className="breadcrumb-item"><Link to={ pathpublic.home  + loc_xoa_dau(product.category).split(" ").join('')} >{product.category}</Link></li>
                          <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
                        </ol>
                      </nav>
                    </div>
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text crad-price">giá {currencyVND(product.price) +' vnđ'}</p>
                    <button type="button" onClick={card} className="btn btn-outline-danger">thêm vào giỏ hàng</button>
                    <div className="row">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="description">
          <div className="row">
            <div className="col-12 description-right">
              <div className="description-right_conten">
                <h5 className="right-conten_header">
                  MÔ TẢ SẢN PHẨM
                </h5>
                <p className="conten-title_text">
                  {product.des}
                </p>
              </div>
            </div>
          </div>
        </div>
    </div> :  <div></div>  


      
    );
  }
  
  export default Productdes;
  