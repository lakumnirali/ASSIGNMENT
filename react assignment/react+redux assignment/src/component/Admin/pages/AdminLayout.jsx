import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './adminlayoutnew.css'
import { MDBBtn } from 'mdb-react-ui-kit';
const AdminLayout = () => {
    const [aside, setasie] = useState(false)
    const tooglerbtn = () => {
        setasie(!aside)
    }
    return (
    
        <>
            <aside id="sidebar" className={aside ? "sidebaractive" : ""}>
                <nav id="sidebarMenu" className="toggle collapse d-block sidebar collapse ">
                    <div className="position-sticky">
                        <div className=" list-group list-group-flush mx-3 mt-4">
                            <Link to="admindashboard" className="list-group-item list-group-item-action py-2 ripple" >
                                <i className="fas fa-tachometer-alt fa-fw me-3 "></i><span className='d-none d-sm-inline'> Dashboard</span>
                            </Link>
                            <Link to="users" className="list-group-item list-group-item-action py-2 ripple">
                                <i className="fa-solid fa-user fa-fw me-3"></i><span className='d-none d-sm-inline'>Users</span>
                            </Link>
                        
                            <Link to="productmanage" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-lock fa-fw me-3"></i><span className='d-none d-sm-inline'>Product</span></Link>
                            <Link to="productreview" className="list-group-item list-group-item-action py-2 ripple">
                                <i className="fas fa-chart-pie fa-fw me-3"></i><span className='d-none d-sm-inline'>Review</span>
                            </Link>


                        </div>
                    </div>
                </nav>
            </aside >

            <main id="main" className={aside ? "mainactive" : ""}>
                <header className='hedaer'>
                    <div className="d-flex align-items-center">
                        <div className="col">
                            <h2 id="btnclick" onClick={tooglerbtn} className=' p-2 mb-0'><i className={aside ? "fa-solid fa-times" : "fa-solid fa-bars"}></i></h2>
                        </div>
                        <div className="col ">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="input_box">

                                    <form className='d-flex input-group search-admin w-auto'>
                                        <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                                        <MDBBtn toggle  className="" color='primary'>Search</MDBBtn>
                                    </form>
                                </div>
                             
                                <div className="list nav-icon me-5">
                                    <ul className='mb-0'>
                                        <li><Link to="/login"><i className="fa-solid fa-user"></i></Link></li>
                                        <li><Link to="/"><i className="fa-solid fa-house"></i></Link></li>
                                        {/* <li><i className="fa-solid  fa-bell"></i></li> */}
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

export default AdminLayout;
