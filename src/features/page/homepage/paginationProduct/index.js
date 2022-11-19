import React from 'react';
import { Link } from 'react-router-dom';
import { MdAddShoppingCart } from "react-icons/md";
import { pathpublicParam } from '../../../../routers/path';
import { currencyVND } from '../../../Methods';

const PaginationProduct = ({data, oncart}) => {

    return (
            <div className="col-6 col-md-4 col-lg-2">
                        <div className="card card-h mb-4" style={{width: '100%'}}>
                            <Link className='link-product' to={pathpublicParam.ProductDesParam + data.id} >
                                <img className="card-img-top" alt={data.name} src={data.photoavt} />
                            </Link>
                          <div className="card-body">
                            <h5 className="card-text">{data.name}</h5>
                            <p className="card-text">{ currencyVND(data.price) +' vnđ'}</p>
                            <div onClick={()=>oncart(data)} className='card-to' >
                            <MdAddShoppingCart></ MdAddShoppingCart>
                            </div>
                        </div>
                </div>
             </div>  
            
        
    );
}

export default PaginationProduct;
