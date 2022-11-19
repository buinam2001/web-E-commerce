import React from "react";
import servicerFrom from "../../../services/servicerfrom"
import "./style.css";





function AdminFrom() {


 const getvalue = (e)=>
  {
    e.preventDefault();
    var data = e.target;    
    var valuefrom =
    {
        name: data.user.value,
        password :data.password.value,
      
    }
  servicerFrom.login(valuefrom)

if(valuefrom.password !== 'admin')
{ 
  
   alert('sai mật khẩu');
  
}

  
   
  }


  return (
 <div className="warper">
  <div className="warper_conten">
    <div className="warper_from">    
      <h1 className="warper_from-title">admin</h1>
      <form onSubmit={getvalue}> 
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">user name</label>
          <input name="user" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
        </div>   
        <button type="submit" className="btn btn-primary from-title_text">Submit</button>
      </form>
    </div> 
  </div>
</div>

  );
}

export default AdminFrom;
