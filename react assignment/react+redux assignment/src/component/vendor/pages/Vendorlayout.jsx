import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
// import "./vendor.css"
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
const Vendorlayout = () => {
    const [aside, setasie] = useState(false)
    const btnclick = () => {
        setasie(!aside)
    }
    return (
    
        <>
            <aside id="sidebar" className={aside ? "sidebaractive" : ""}>
                <nav id="sidebarMenu" className="toggle  collapse d-lg-block sidebar collapse ">
                    <div className="position-sticky">
                        <div className=" list-group list-group-flush mx-3 mt-4">
                            <Link to="vendorsystem" className="list-group-item list-group-item-action  ripple" aria-current="true">
                                <i className="fas fa-tachometer-alt fa-fw me-3"></i><span> Dashboard</span>
                            </Link>
                            <Link to="users" className="list-group-item list-group-item-action py-2 ripple">
                                <i className="fa-solid fa-user fa-fw me-3"></i><span>Users</span>
                            </Link>
                            <Link to="productmanage" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-lock fa-fw me-3"></i><span>Product</span></Link>
                            <Link to="productreview" className="list-group-item list-group-item-action py-2 ripple">
                                <i className="fas fa-chart-pie fa-fw me-3"></i><span>Review</span>
                            </Link>


                        </div>
                    </div>
                </nav>
            </aside >

            <main id="main" className={aside ? "mainactive" : ""}>
                <header className='hedaer'>
                    <div className="d-flex align-items-center">
                        <div className="col">
                            <h2 id="btnclick" onClick={btnclick} className=' p-2 mb-0'><i className={aside ? "fa-solid fa-times" : "fa-solid fa-bars"}></i></h2>
                        </div>
                        <div className="col ">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="input_box">

                                    <form className='d-flex input-group w-auto'>
                                        <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                                        <MDBBtn color='primary'>Search</MDBBtn>
                                    </form>
                                </div>
                                <div className="list me-5">
                                    <ul className='mb-0'>
                                        <li><Link to="/login"><i className="fa-solid fa-user"></i></Link></li>
                                        <li><Link to="/"><i className="fa-solid fa-house"></i></Link></li>
                                        {/* <li><i className="fa-solid  fa-bell"></i></li> */}
                                    </ul>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                   <li><a className="dropdown-item" href="#">My profile</a></li>
                                     <li><a className="dropdown-item" href="#">Settings</a></li>
                                     <li><a className="dropdown-item" href="#">Logout</a></li>
                                 </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section  className= 'bg-light px-2 pt-3'>
                    <Outlet></Outlet>
                </section>
            </main>
        </>
    );
};

export default Vendorlayout;
