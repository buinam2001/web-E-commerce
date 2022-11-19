import { addcart } from "../../slices/cartSlies"
import React ,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import CategoryPage from './categorypage/category';
import { useDispatch , useSelector} from "react-redux";
import Slideshow from '../layout/Slide';
import ReactPaginate from "react-paginate";
import PaginationProduct from "./paginationProduct";




function Homepage() {

      const dispatch = useDispatch();
      const pageitem = 6;
      const dataproduct = useSelector((state) => state.productApi);
      const datacategory = useSelector((state) => state.categoryApi);
      const [itemOffset, setItemOffset] = useState(0);
      let pageEnd = itemOffset + pageitem;
      let totalpages = Math.ceil(dataproduct.length / pageitem);
      let currentPage = dataproduct.slice(itemOffset, pageEnd);
      const cartadd = (data)=>
      {    
        let newdata = {...data ,totalcart: 1};
        dispatch(addcart(newdata));
       
      }
      function handlechangepage(e) {
        let newpage = (e.selected * pageitem) % dataproduct.length;
        setItemOffset(newpage);
        
      }

      useEffect(() => {    
        window.scrollTo(0,0);
      },[]);


      
 return (

  <div className='stroll'>
      <Slideshow></Slideshow>
      <div className="container">
        <div style={{marginLeft: 0}} className="header_tile mt-3">
          <h5 className="text-primary pr-3">SẢN PHẨM MỚI </h5>
          <h5 className="header_tile-text">SẢN PHẨM BÁN CHẠY</h5>
        </div>
        <div className="row">
          <div className="col-12 col-xl-12">     
            <div className="row d-flex justify-content-around">
                {
                      currentPage.map((data,index) =>
                      {
                          return(                         
                            <PaginationProduct data={data} oncart={cartadd} key={index}></PaginationProduct>                      
                          )
                      })
                }                                          
            </div>    
          </div>     
        </div>
      </div>
   
            <ReactPaginate
              pageCount={totalpages}
              onPageChange={handlechangepage}
              pageRangeDisplayed={5}
              previousLabel="Previous"
              nextLabel="Next"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
            >
            </ReactPaginate> 

          {
            datacategory.map((value,index)=>{
              return(  
                <div key={index} className="container">
                  <div className="hero mb-2">
                    <h5 className="hero_title">
                      {value.name}
                    </h5>
                  </div>
                  <div className="row">
                    <CategoryPage valuecate={value.name} valueproduct={dataproduct}></CategoryPage>
                </div>
              </div>
                )
            })
          }
       

     
  </div>
    
    );
  }
  
  export default Homepage;
  