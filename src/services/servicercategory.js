import { axiosClient } from "../api/axiosClient";
import authHeader from "../auth/auth";


    const getAll = () => {
        if(localStorage.getItem('userAdmin'))
          {
              return axiosClient.get("/category" ,{ headers: authHeader.Admin()  });
          }
          else if (localStorage.getItem('user'))
          {
            return axiosClient.get("/category" ,{ headers: authHeader.user() });
          }
     };
  
      const get = id => {
        return  axiosClient.get(`/category/${id}`,{ headers: authHeader.Admin()  });
      };

      const create = data => {
        return axiosClient.post("/category", data ,{ headers: authHeader.Admin() });
      };

      const update = (id, data) => {
        return axiosClient.patch(`/category/${id}`, data ,{ headers: authHeader.Admin() });
      };
      const remove = id => {
        return axiosClient.delete(`/category/${id}`,{ headers: authHeader.Admin() });
      };
  
  
  const servicerCategory = {
    getAll,
    get,
    create,
    update,
    remove
  };
  export default servicerCategory;