import React ,{useState,useEffect, useMemo} from 'react';
import { MdAddShoppingCart } from "react-icons/md";
import { useSelector , useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { Link , useNavigate} from 'react-router-dom';
import { addcart } from "../../../redux/slices/cartSlies";
import { pathpublicParam } from '../../../routers/path';
import { loc_xoa_dau, currencyVND} from '../../Methods';
import { pathpublic } from '../../../routers/path';
import "./style.css";

const CategoryProduct = () =>
{
  

    let navigate = useNavigate();
    const dispatch = useDispatch();
    let { category } = useParams();
    const data = useSelector((state) => state.productApi);
    const [sortType, setSortType] = useState();
    const [ product , setproduct ] = useState([]);
    const items = ['giá cao','Giá thấp' ];

    const categorysearch = useSelector((state) => state.categoryApi);
    const index = categorysearch.findIndex(({ name }) => 
    {
        return  loc_xoa_dau(name).split(" ").join('').toLowerCase() === category.split(" ").join('').toLowerCase()
            
    });  

    useEffect(function() {
      
      if (index === -1) {

      
        navigate(pathpublic.NotFound1)
        
      }

    },[navigate,index])
   
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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