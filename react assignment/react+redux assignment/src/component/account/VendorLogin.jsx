import React, { useState } from 'react';
import "./login.css"
import { Link, useNavigate } from 'react-router-dom';
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { loginUsers } from '../../store/action/users';
import { useDispatch } from 'react-redux';
import CustomHooks from '../../hooks/CustomHooks';
import { useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VendorLogin = () => {
  const dispatch = useDispatch()
  const { handleChange,inp} = CustomHooks();
  const [cookies,setcookies]=useCookies(["name"])
  const navigate=useNavigate()
  const showToastMessage  = () =>{
    toast.success('Login succesfull',{
      position:toast.POSITION.TOP_CENTER,
      autoClose:700
    })
  } 
  const showToastMessagereg  = () =>{
    toast.warning('please register first',{
      position:toast.POSITION.TOP_CENTER,
      autoClose:700
    })
  } 
  const Loginbutoon =async(event)=>{

    let responce= await dispatch(loginUsers(inp.username,inp.password))
    let getdata =responce.payload.data[0]
    if (responce.payload.data[0].role_id==3) {
      showToastMessage()
      setTimeout(() => {
        navigate("/vendor/dashboard")
      }, 1500);
    } else {
    showToastMessagereg()
    setTimeout(() => {
      navigate("/vendorregister")    
  }, 1500);
  }
  }

  // console.log( "inp",inp);
    return (
        <div>
            <section className="vh-100 log-sec">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card log-card">
          <div className="row g-0">
            <div className="col-md-6 mt-5 pt-5 col-lg-5 d-none d-md-block">
              <img src="https://www.granify.com/hs-fs/hubfs/Illustrations%20and%20Graphics/Animated/in-store%20online%20shopping.gif?width=800&height=600&name=in-store%20online%20shopping.gif"
                alt="login form" className="img-fluid log-img" />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3 i-log"></i>
                    <span className="h1 fw-bold mb-0">R&N </span>
                  </div>

                  {/* <h5 className="fw-normal mb-3 pb-3 log-sign" >Sign into your account</h5> */}
{/* {JSON.stringify(inp)} */}

                  <div className="form-outline mb-4">
                  <MDBInput onBlur={handleChange} name="username"  label='username' id='text' type='text' />
                  </div>
                  <div className="form-outline mb-4">
                  <MDBInput onBlur={handleChange}  name="password" label='Password' id='password' type='password ' /><span></span>
                  </div>
                  <div className="pt-1 mb-4">
                    <MDBBtn className="btn btn-dark btn-lg btn-block" type="button" onClick={Loginbutoon}>Login</MDBBtn>
                  </div>

                  <a className="small text-muted" href="#!">Forgot password?</a>
                  <p className="mb-5 pb-lg-2 log-signup">Don't have an account? <Link className='log-regis  fw-bold text-success' to="/register">Register here</Link></p>
                  <a href="#!" className="small text-muted">Terms of use.</a>
                  <a href="#!" className="small text-muted">Privacy policy</a>
                </form>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default VendorLogin;