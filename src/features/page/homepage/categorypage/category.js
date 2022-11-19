  import React from 'react';
  import { MdAddShoppingCart } from "react-icons/md";
  import { Link } from 'react-router-dom';
  import { useDispatch } from "react-redux";
  import { addcart } from "../../../slices/cartSlies";
  import { pathpublicParam } from '../../../../routers/path';
  import { currencyVND } from '../../../Methods';
  const CategoryPage = ({valuecate,valueproduct}) =>
  {


  const dispatch = useDispatch();

  var datanews = valueproduct.filter((data) =>{

        return valuecate.toLowerCase() === data.category.toLowerCase()

  });



  const card = (data)=>
  {
   
    let newdata = {...data , totalcart: 1}
 
   dispatch(addcart(newdata));

  }
  
 

   return(   
        datanews.map(function(v,i)
        {
      return  (
        <div key={i} className="col-6 col-sm-4 col-xl-2 ">
          < div className="card mb-4 card-h" style={{width: '100%'}}>
          <Link style={{textDecoration:"none",color:"black"}} to={pathpublicParam.ProductDesParam + v.id}> 
            <img className="card-img-top" src={v.photoavt} alt={v.name} />
          </Link>
            <div className="card-body p-0">
              <h5 style={{fontSize: '15px', padding: 0, margin: 0}} className="card-title card-text">{v.name}</h5>
              <p style={{fontSize: '13px', padding: 0, margin: 0}} className="card-text">{ currencyVND(v.price) +' vnđ'} </p>          
                <div className='card-be' onClick={()=>card(v)}  >
                    <MdAddShoppingCart></ MdAddShoppingCart>
                </div>
            </div>
          </div>
        </div>
        )

        })

      
        )
  

    
  }

  export default CategoryPage;