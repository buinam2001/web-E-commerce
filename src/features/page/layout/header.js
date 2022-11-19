import React, { useState , useEffect } from 'react';
import { useRef } from 'react';
import { Navbar, Container , Nav } from 'react-bootstrap';
import { TiShoppingCart } from "react-icons/ti";
import { FiUser } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { FcSearch } from "react-icons/fc";
import { NavLink } from 'react-router-dom'
import {  useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { pathpublic , pathpublicParam} from '../../../routers/path';
import { loc_xoa_dau } from '../../Methods/index'
import "./style.css";



const Header = () =>
{

  const [display , Setdisplay ] = useState({display:"none"});
  const [Search , SetSearch ] = useState("");
  const [auth , setauth ] = useState(false);
  const BoxSearch = useRef(null);
  const product = useSelector((state) => state.productApi);
  const Category = useSelector((state) => state.categoryApi);
  const cart = useSelector((state) => state.cart);
  const navLinkClass = ({ isActive }) => {
    return isActive ? 'nav-link activated' : 'nav-link'
  }
  const datajson = localStorage.getItem("data");


  
  useEffect(() => {
    if(Search.length > 0 )
    {
      Setdisplay({display:"block"});
    }
    if(Search.length === 0 )
    {
        Setdisplay({display:"none"});
    }   
  }, [Search]);

  useEffect(() => {
    
    document.addEventListener('click',handleOutside);

  return () => {

    document.removeEventListener('click',handleOutside);

  };
  }, []);

  function handleOutside(event) {
    const { target } = event;
    if (!BoxSearch.current.contains(target)){
      Setdisplay({display:"none"});
    }
  }
 

let productSearch = product.filter((s) => s.name.toLowerCase().includes(Search.toLowerCase()))


  const logout = () =>
  {
    localStorage.removeItem("user");
    localStorage.removeItem("data");
    window.location.reload();
  }

  const handlechange = (e) =>
  {
    let value = e.target.value;
    if(!value.startsWith(' ')) {

        console.log('message')
         SetSearch(value);
    }
  }


 const check = () =>
 {
  setauth(!auth);
 }
  var sum = 0;
  for(var i = 0 ; i <cart.length ; i++)
  {
      sum += cart[i].totalcart;
  }


  function handleclick() {
    
     Setdisplay({display:"none"});

  }


    return(
    <div id='wapper'>
      <header>
        <div className="container">
          <div className="header-logo">   
            <div style={{marginLeft: '15px'}} className="logo">
            < Link to={pathpublic.home}>
              <img className="logo-img l" src="http://mauweb.monamedia.net/vienthonga/wp-content/uploads/2018/01/logo-mona-vienthonga.png" alt="" />
            </Link>
            </div>
              <div className='cart_user d-flex align-items-center'>    
                <NavLink to={pathpublic.cart} className={navLinkClass}> 
                    <div className='box_cart'>
                      <TiShoppingCart></TiShoppingCart>
                      <div className='cart_total'>{sum}</div>
                    </div>
                </NavLink> 
                <div className="list-icon">

                 <div className="auth_box">
                  <VscAccount onClick={check}></VscAccount>

                  <div className="cart-auth">      
                      <div className="traingle"></div>
                      <div className='btn_auth'>
                          <span><FiUser></FiUser></span> 
                          <span>{datajson}</span>
                      </div>
                      <div className='btn_auth'>
                          <span><AiOutlineLogout></AiOutlineLogout></span> 
                          <span onClick={logout} >đăng xuất</span>      
                      </div>
                  </div>
                </div>
                </div>
              </div>
          </div>
        </div>
      </header>
            <Navbar bg="light" className='check' expand="lg">
                <Container fluid>
                <div className="container">
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                    <Nav
                      className="me-auto my-2 my-lg-0"
                      style={{ maxHeight: '100px' }}
                      navbarScroll
                    >
                      <NavLink to={pathpublic.home} className={navLinkClass}>TRANG CHỦ</NavLink> 
                      {
                              Category.map((data,index)=>
                              {   
                                 return <NavLink key={index} to={pathpublicParam.homeParam + loc_xoa_dau(data.name).split(" ").join('').toLowerCase()} className={navLinkClass}>{data.name}</NavLink> 
                              })
                      }  
                    </Nav> 
                    <div className="box">
                      <div className="box_search">
                        <div className="input_Search">
                          <input onChange={handlechange} value={Search} placeholder="tìm kiếm sản phẩm" className="search" type="text" />
                        </div>
                        <div className="icon_Search">
                            <FcSearch></FcSearch>
                        </div>
                      </div>
                    
                        <div ref={BoxSearch} className="card mb-3 search_product" style={display} >
                          {
                          productSearch.length === 0 ? <div className="row search_product-cart g-0">
                            <div className="col-md-4">
                              <img src="https://t.ex-cdn.com/chatluongvacuocsong.vn/resize/740x416/ucp/themes/images/no-photo.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                              <div className="card-body">
                                <h5 className="card-title">chưa tồn tại</h5>
                                <p className="card-text"></p>
                              </div>
                            </div>
                          </div> :
                           productSearch.map((data,index)=>{                    
                                return(
                                <Link onClick={handleclick} style={{width: "50%"}} key={index} className='link-product' to={pathpublicParam.ProductDesParam  +data.id}  >
                                    <div className="row search_product-cart g-0">
                                    <div className="col-md-4 search_crad">
                                      <img src={data.photoavt}  className="img-fluid rounded-start" alt={data.name} />
                                    </div>
                                    <div className="col-md-8 search_crad">
                                      <div className="card-body">
                                        <h5 className="card-title">{data.name}</h5>
                                        <p className="card-text">{data.des}</p>
                                      </div>
                                    </div>
                                  </div> 
                                </Link>
                              );
                              })
                          }             
                      </div>
                    </div>
                  </Navbar.Collapse>
                  </div>
                </Container>
            </Navbar>   
    </div>
     
    )
}

export default Header