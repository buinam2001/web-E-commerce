import React ,{useState,useEffect, useMemo} from 'react';
import { MdAddShoppingCart } from "react-icons/md";
import { useSelector , useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { addcart } from "../../slices/cartSlies";
import { pathpublicParam } from '../../../routers/path';
import { loc_xoa_dau, currencyVND} from '../../Methods';
import "./style.css";

const CategoryProduct = () =>
{
  

    const dispatch = useDispatch();
    let { category } = useParams();
    const data = useSelector((state) => state.productApi);

    // const datacategory = useSelector((state) => state.categoryApi);
    // let index = datacategory.findIndex(({ name }) => (loc_xoa_dau(name).split(" ").join('').toLowerCase() === category.split(" ").join('').toLowerCase()));  
    const [sortType, setSortType] = useState();
    const [ product , setproduct ] = useState([]);
    const items = ['giá cao','Giá thấp' ];

  const datacategory = useMemo(function() {

       let datacategory = data.filter((data) =>{
        
        return category.toLowerCase() === loc_xoa_dau(data.category.split(" ").join('').toLowerCase())
  
      });

      return datacategory;
      
    },[data,category]);

    useEffect(() => {

      setproduct(datacategory);

    },[datacategory]);

    useEffect(() => {
        window.scrollTo(0,0);
        setSortType('');
         
    },[category]); 


    useEffect(() => {
            const sortProduct = type => {   
              let fomat = +type;
              let data; 

              switch (fomat) {
                case 1:
                  data = [...product].sort(function(a, b){return b.price - a.price});
                  setproduct(data);

                  break;
                  case 2:
                    data = [...product].sort(function(a, b){return a.price - b.price});
                    setproduct(data)
                  break
                default:
                      return
                
              }
              
            };
        
            sortProduct(sortType);

    }, [sortType]); 

    const pushcard = (data)=>
          {
          
          let newdata = {...data,totalcart: 1}
        
          dispatch(addcart(newdata));
        
    }
          
          
    const handleChange = (e) => {

          setSortType(e.target.value);
          
    }



      
    return(
      
    
        <div style={{marginTop: '145px'}} className="container">
          
         <select value={sortType} onChange={handleChange} className="form-select form-select-lg mb-3 fiter" aria-label=".form-select-lg example">
         <option>sắp xếp</option>
               {
                items.map((data,index)=>
                {
                    return (<option value={index+1} key={index}>{data}</option>)
                })
               }
            
        </select>

        <div className="row m-4">   
            { 
                  // product.length === 0 ? <div></div> :
                  
                  product.map((value,index)=>
                  {
                      return (
                        <div key={index} className="col-6 col-sm-4 col-xl-2">
                                  <div className="card mb-4 card_cate" style={{width: '100%'}}>
                                  <Link style={{textDecoration:"none",color:"black"}} to={pathpublicParam.ProductDesParam + value.id}>
                                    <img className="card-img-top" src={value.photoavt} alt={value.name} />
                                  </Link>
                                    <div className="card-body p-0">
                                      <h5 style={{fontSize: '15px', padding: 0, margin: 0}} className="card-title card-text">{value.name}</h5>
                                      <p style={{fontSize: '13px', padding: 0, margin: 0}} className="card-text">{ currencyVND(value.price) +' vnđ'} </p>
                                      <div className='card-be' onClick={()=>pushcard(value)} >
                                          <MdAddShoppingCart></ MdAddShoppingCart>
                                      </div>
                                    </div>
                                </div>
                          </div> 
                              )   
                  })
            } 
       </div>
       </div>   
  );
 

  
}

export default CategoryProduct;