import React, {useState} from 'react';
import servicerFrom from "../../../services/servicerfrom"
import * as Yup from 'yup';
import { useFormik } from 'formik';
import "./style.css";


function FromHome() {
  const [from, setfrom] = useState(false);
  const [loading, setloading] = useState(false);

const handleSigup = () =>
{ 
  setfrom(!from)
}


const formilogin = useFormik({
  initialValues: {
    username:"",
    password:"",
   
  },
  validationSchema: Yup.object({
    username: Yup.string().required('không được bỏ trống').min(5,"tối thiều 5 ký tự"),
    password: Yup.string().required('không được bỏ trống').matches("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$","Tối thiểu 6 ký tự, ít nhất một chữ cái hoa và một số"),


  }),
  onSubmit: (values) => {
    setloading(true);
      
    const fromatvalues = 
    {
      name: values.username,
      password: values.password
    }
    
    servicerFrom.signIn(fromatvalues).then(function() {
      localStorage.setItem("data",fromatvalues.name);
      setloading(false);

    })

  },
});

const formiksigup = useFormik({
  initialValues: {
    usernamenew:"",
    passwordnew:"",
    checkPasswordnew:"",
  },
  validationSchema: Yup.object({
    usernamenew: Yup.string().required('không được bỏ trống').min(5,"tối thiều 5 ký tự"),
    passwordnew: Yup.string().required('không được bỏ trống').matches("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$","Tối thiểu 6 ký tự, ít nhất một chữ cái hoa và một số"),
    checkPasswordnew:Yup.string().required('không được bỏ trống').oneOf([Yup.ref("passwordnew"),null],"mật khẩu không khớp")
  }),
  onSubmit: (values) => {

    setloading(true);
    const fromatvalues = 
    {
      name : values.usernamenew,
      password: values.passwordnew
    }
    servicerFrom.signUp(fromatvalues).then(() => {

      setloading(false);
      
    });
  

  },
});



return (

<div className="from-wapper">
  <div className="container">
    <div className="row justify-content-center flex-column-reverse flex-lg-row">
      <div className="col-12 col-lg-4 bg-white">
        {
            from === false ? <div>
             <h1 className="from_login">đăng nhập</h1>
              <form onSubmit={formilogin.handleSubmit}>
                <div className="form-group mt-3">
                  <input 
                  type="text" 
                  className="form-control" 
                  id="username" 
                  name="username" 
                  value={formilogin.values.username}  
                  onChange={formilogin.handleChange} 
                  placeholder="user name" />
                </div>
                {
                  formilogin.errors.username && (
                    <p className="errors">{formilogin.errors.username}</p>
                  )

                }
                <div className="form-group mt-3">
                  <input 
                    type="password"
                    className="form-control"
                    id="password" 
                    name="password"
                    placeholder="Password"
                    onChange={formilogin.handleChange} 
                    value={formilogin.values.password}  
                     />
                </div>
                {
                  formilogin.errors.password && (
                    <p className="errors">{formilogin.errors.password}</p>
                  )

                }


              {
                loading ? <button class="btn mt-4 btn-from" type="button" disabled>
                          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                             Loading...
                         </button>
                        : <button type="submit" className="mt-4 btn-from">đăng nhập</button>
              }
              </form>
              </div> : <div> 
              <h1 className="from_login">đăng ký</h1>
                <form onSubmit={formiksigup.handleSubmit}>
                  <div className="form-group mt-3">
                      <input 
                      type="text" 
                      className="form-control" 
                      id="usernamenew" 
                      name="usernamenew" 
                      value={formiksigup.values.usernamenew}  
                      onChange={formiksigup.handleChange} 
                      placeholder="user name" />
                  </div>
                  {
                  formiksigup.errors.usernamenew && (
                    <p className="errors">{formiksigup.errors.usernamenew}</p>
                  )
                }
                  <div className="form-group mt-3">
                  <input 
                    type="password"
                    className="form-control"
                    id="passwordnew" 
                    name="passwordnew"
                    placeholder="Password"
                    onChange={formiksigup.handleChange} 
                    value={formiksigup.values.passwordnew}  
                     />
                  </div>
                  {
                  formiksigup.errors.passwordnew && (
                    <p className="errors">{formiksigup.errors.passwordnew}</p>
                  )
                }
                  <div className="form-group mt-3">
                    <input 
                    type="password" 
                    className="form-control" 
                    id="checkPasswordnew" 
                    name="checkPasswordnew"
                    placeholder="Password" 
                    onChange={formiksigup.handleChange} 
                    value={formiksigup.values.checkPasswordnew}  
                    />
                  </div>
                {
                  formiksigup.errors.checkPasswordnew && (
                    <p className="errors">{formiksigup.errors.checkPasswordnew}</p>
                  )
                }

                {
                  loading ? <button class="btn mt-4 btn-from" type="button" disabled>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                              Loading...
                          </button>
                          : <button type="submit" className="mt-4 btn-from">đăng ký</button>
                }

                </form>
              </div>

        }
       
      </div>
      <div className="col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center from_left">
        <h1>hello</h1>
        <p>nếu bạn chưa có tài khoản hãy đăng ký</p>
      
        <div className="from_left-btn" onClick={handleSigup}> {from === false ? "đăng ký" : "đăng nhập" }</div>
      </div>
    </div>
  </div>
</div>

  );
}

export default FromHome;
