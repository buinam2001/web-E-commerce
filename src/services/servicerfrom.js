import { axiosClient } from "../api/axiosClient";


  const login = data => {
    return axiosClient.post("/auth/login", data)
    .then((response) => {
        if (response.data.access_token) {
          localStorage.setItem("userAdmin", JSON.stringify(response.data));
          window.location.reload();
        }
        return response.data;
      });

  };




  const signUp = data => {
    return axiosClient.post("/auth/register", data)
    .then((response) => {
        if (response.data.access_token) {
          localStorage.setItem("user", JSON.stringify(response.data));
          localStorage.setItem("data",data.name);
          window.location.reload();
        }
        return response.data;
      }).catch((err) => {
        alert("tài khoản đã tồn tại")
      
          })
  };

  const signIn = data => {
    
   
    return axiosClient.post("/auth/login", data).then((response) => {
    
        if (response.data.access_token) {
          localStorage.setItem("user", JSON.stringify(response.data));
          window.location.reload();
        }
      
        return response.data;
      })

      .catch((err) => {
        
        alert("sai mật khẩu hoặc Tài khoản không tồn");
      
          
        })
  };

  
  const servicerFrom = {
    login,
    signUp,
    signIn
  };
  export default servicerFrom;