import {
    MDBBtn,
    MDBCollapse,
    MDBContainer,
    MDBDropdown,
    MDBDropdownItem,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBIcon,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarNav,
    MDBNavbarToggler,
} from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Users } from '../store/action/users';
import './nav.css';
import "./navbar.css";
export default function App() {
    const [showBasic, setShowBasic] = useState(false);
    const [loading, setLoading] = useState(false)
    const dispatch=useDispatch()
    const [cookies] = useCookies(['username','id']);
    const [apidata,setapiData]=useState()
    console.log("username",cookies.id);
console.log(apidata);
// second method 
useEffect(()=>{
    // navUser()
},[])
// const  navUser=async()=>{
//     let responce =await dispatch(Users(cookies.id))
//     console.log("responce",responce.payload.data.username);
//     // setapiData(responce.payload.data)
// }
// navUser()

    return (
        <MDBNavbar expand='lg' light className='text-light' bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#'><img src="images/logo.png" alt="" /></MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' href='#'>
                                <Link className='text-dark' to="/">Home</Link>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink>
                                <Link className='text-dark' to='/'>Category</Link>
                                </MDBNavbarLink>
                        </MDBNavbarItem>


                    </MDBNavbarNav>

                    <form className='d-flex justify-content-center mx-5 input-group w-75'>
                        <input type='search' className='form-control  ' placeholder='search somthing owesome 😊' aria-label='Search' />
                        <MDBBtn color='primary'>Search</MDBBtn>
                    </form>
                    <MDBNavbarItem className='me-3 me-lg-0 d-block px-2'>
                        <MDBNavbarLink href='#'>
                            <MDBIcon className=' mt-2 text-dark' fas icon='shopping-cart' />
                        </MDBNavbarLink>
                    </MDBNavbarItem>

                    <MDBNavbarItem className='me-3  me-lg-0 d-block px-2'>
                        <MDBNavbarLink href='#'>
                            <MDBIcon className=' mt-2 text-dark' fas icon='bell' />
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBDropdown className='me-3  me-lg-0  px-2'>
                        <MDBDropdownToggle   tag='a' className='nav-link ' role='button'>
                            <MDBIcon fas icon="user-alt fa-fw me-3 text-dark" /><span className='fs-5 text-dark' >{"users" ? cookies.username:"false"}</span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu className='mainnavusers'>
                            <MDBDropdownItem link ><Link className='text-dark fs-5' to='/login'>Login</Link></MDBDropdownItem>
                            <MDBDropdownItem link ><Link className='text-dark fs-5' to='/register'>Registration</Link></MDBDropdownItem>
                            <MDBDropdownItem link ><Link className='text-dark fs-5' to='/becomevendor'>Become seller</Link></MDBDropdownItem>
                            <MDBDropdownItem link ><Link className='text-danger fs-5' to='/login'>Help 24&times;7</Link></MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>

    );
}