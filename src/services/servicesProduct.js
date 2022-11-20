import { axiosClient } from "../api/axiosClient";
import authHeader from "../auth/auth";




const getAll = () => {

  if(localStorage.getItem('userAdmin'))
  {
    return axiosClient.get("/product", { headers: authHeader.Admin() } );
  }
  else if (localStorage.getItem('user'))
  {
    return axiosClient.get("/product" ,{ headers: authHeader.user() });
  }
  
  };
  
  const get = id => {
    return  axiosClient.get(`/product/${id}`,{ headers: authHeader.Admin() });
  };


  const create = data => {
    return axiosClient.post("/product", data ,{ headers: authHeader.Admin() });
  };

  const update = (id, data) => {
    return axiosClient.patch(`/product/${id}`,data, { headers: authHeader.Admin()});
  };

  const remove = id => {
    return axiosClient.delete(`/product/${id}`,{ headers: authHeader.Admin() });
  };





  
  const ProductService = {
    getAll,
    get,
    create,
    update,
    remove,
   
  };
  export default ProductService;