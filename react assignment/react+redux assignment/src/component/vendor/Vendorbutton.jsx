import { MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';
import { Link } from 'react-router-dom';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import "./vendorintro.css"
const Vendorbutton = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <h1 className='text-danger'>Sell online with us</h1>
            </div>
            <div className="row">
                <div className="col-lg-7">
                    <h2 className='text-secondary'>for account create</h2>
                    <p>Creating your seller account is quick process,taking less then 10 min and required only some document to verification follow the instruction to create a account  </p>
                </div>
            </div>
            <div className="row text-center mt-5">
                <div className="col-lg-6 ">

                    <MDBBtn className='bg-success'  > <Link className='text-light fs-5' to="/vendorlogin">login</Link></MDBBtn>
                </div>
                <div className="col-lg-6 ">
                    <MDBBtn className='bg-info'> <Link className='text-light  fs-5' to="/vendorregister">Registration</Link></MDBBtn>
                </div>
            </div>
            <div className="row mt-5 vendorintroitem p-4">
                <MDBRow className='mb-3'>
                    <MDBCol sm='4'>
                        Sell Mobile Online
                    </MDBCol>
                    <MDBCol sm='4'>
                        Sell Electronics Online
                    </MDBCol>
                    <MDBCol sm='4'>
                        Sell Jewellery Online
                    </MDBCol>
                </MDBRow>
                <MDBRow className='mb-3'>
                    <MDBCol sm='4'>
                        Sell Makeup Online
                    </MDBCol>
                    <MDBCol sm='4'>
                        Sell Books Online
                    </MDBCol>
                    <MDBCol sm='4'>
                        Sell Beauty Products Online
                    </MDBCol>
                </MDBRow>
                <MDBRow className='mb-3'>
                    <MDBCol sm='4'>
                        Sell Shirts Online
                    </MDBCol>
                    <MDBCol sm='4'>

                        Sell Clothes Online
                    </MDBCol>
                    <MDBCol sm='4'>

                        Sell Women Clothes Online
                    </MDBCol>
                </MDBRow>
                <MDBRow className='mb-3'>
                    <MDBCol sm='4'>

                        Sell Paintings Online
                    </MDBCol>
                    <MDBCol sm='4'>

                        Sell Home Products Online
                    </MDBCol>
                    <MDBCol sm='4'>
                        Sell Indian Clothes Online
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol sm='4'>
                        Sell Sarees Online
                    </MDBCol>
                    <MDBCol sm='4'>

                        Sell Watch Online
                    </MDBCol>
                    <MDBCol sm='4'>

                        Sell Appliances Online
                    </MDBCol>
                </MDBRow>
            </div>
        </div>
        // <div className='container'>
        //    
        // </div>
    );
};

export default Vendorbutton;