import { axiosClient } from "../api/axiosClient";
import authHeader from "../auth/auth"

  const getAll = () => {
    return axiosClient.get("/order",{ headers: authHeader.Admin()});
  };
  const get = id => {
    return  axiosClient.get(`/order/${id}`,{ headers: authHeader.Admin() });
  };
  const create = data => {
    return axiosClient.post("/order", data ,{ headers: authHeader.user() });
  };
  const update = (id, data) => {
    return axiosClient.put(`/order/${id}`, data);
  };
  const remove = id => {
    return axiosClient.delete(`/order/${id}`,{ headers: authHeader.user() });
  };
  
  
  const servicerorder = {
    getAll,
    get,
    create,
    update,
    remove
  };
  export default servicerorder;