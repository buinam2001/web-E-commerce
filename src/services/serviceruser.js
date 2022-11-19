// import { axiosClient } from "../api/axiosClient";
// import authHeader from "../auth/auth";

  

//   const create = (data) => {
//     localStorage.setItem("data",data.name);
//     return (axiosClient.post("/user", data ,{ headers: authHeader.user() }));
//   };


//   const get = name => {
//     return  axiosClient.get(`/user?name=${name}`,{ headers: authHeader.user() });
//   };

//   const getAll = () => {
//     return  axiosClient.get(`/user`,{ headers: authHeader.Admin()});
//   };
  

//   const serviceruser = {
//     get,
//     create,
//     getAll,
    
//   };
//   export default serviceruser;