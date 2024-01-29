import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomHooks from '../../hooks/CustomHooks';
import { RegisterUsers } from '../../store/action/users';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCookies } from 'react-cookie';

const VendorRegister = () => {
    const [cookies, setcookies] = useCookies(["name"])

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const showToastMessage = () => {
        toast.success('😊 wel-come to our database', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 700
        })
    }
    const showToastMessagefailed = () => {
        toast.error('please fill form first', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000
        })
    }
    const { handleChange, inp } = CustomHooks()
    const Registration = async () => {
        console.log("input ", inp);
        const registerationwithRollid = { ...inp, role_id: 3 }
        let RegistrationData = await dispatch(RegisterUsers(registerationwithRollid))
        if (inp == undefined) {
            showToastMessagefailed()
        }
        else {
            showToastMessage()
            setTimeout(() => {
                navigate("/vendorlogin")
            }, 1500)
        }
        console.log("registerationwithRollid", registerationwithRollid.role_id);
        console.log("registerationwithRollid", registerationwithRollid.username);
        console.log("registerationwithRollid", registerationwithRollid.email);
        setcookies('role_id', registerationwithRollid.role_id);
        setcookies('username', registerationwithRollid.username);
        setcookies('email', registerationwithRollid.email);
    }
    // setFormData({...formData})
    // const [formData,setFormdata]=useState(true)
    // const PostData =(event)=>{
    //   setFormdata({...formData,[event.target.name]:event.target.value})
    // }
    // const handleSubmit=
    return (
        <div>
            <section className="vh-100 log-sec">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card log-card">
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src="https://i.pinimg.com/originals/c6/53/57/c65357510381be68f5513991f4007a60.gif"
                                            alt="login form" className="img-fluid log-img mt-5 pt-5" />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">

                                            <form>

                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <i className="fas fa-cubes fa-2x me-3 i-log"></i>
                                                    <span className="h1 fw-bold mb-0">Hello Vendor </span>
                                                </div>
                                                {/* {JSON.stringify(inp)} */}


                                                <div className="form-outline mb-4">
                                                    <MDBInput name="username" onChange={handleChange} label='Username' id='typeText' type='text' />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <MDBInput name="mobile" onChange={handleChange} label='Mobile no.' id='typeText' type='mobile' />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <MDBInput name='email' onChange={handleChange} label='Email' id='email' type='email' />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <MDBInput name='password' onChange={handleChange} label='Password' id='password' type='password ' /><span></span>
                                                </div>
                                                <div className="pt-1 mb-4">
                                                    <MDBBtn className="btn btn-dark btn-lg btn-block" onClick={Registration} type="button"> Register</MDBBtn>
                                                </div>

                                                <a className="small text-muted" href="#!">Forgot password?</a>
                                                <p className="mb-5 pb-lg-2 log-signup">have an account? <Link className='log-regis text-danger fw-bold' to="/login">Login</Link></p>
                                                <a href="#!" className="small text-muted">Terms of use.</a>
                                                <a href="#!" className="small text-muted">Privacy policy</a>
                                                <ToastContainer />
                                            </form>

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

export default VendorRegister;