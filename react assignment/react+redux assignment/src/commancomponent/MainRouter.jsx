import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Navbar from '../commancomponent/Navbar.jsx'
import Home from '../store/pages/Home';
// import Accessstoredata from '../store/pages/AccessStoreData'
import Login from '../component/account/Login';
import Register from '../component/account/Register.jsx';
import VendorLogin from '../component/account/VendorLogin.jsx';
import VendorRegister from '../component/account/VendorRegister.jsx';
import LoaderCompo from '../commancomponent/LoaderCompo.jsx';
// import AdminCompoRoute from '../component/Admin/pages/AdminLayout.jsx';
import Mainvendor from '../component/vendor/Vendorbutton.jsx';
// import VendorRoute from "../component/vendor/pages/Vendorlayout.jsx"
const AdminCompoRoute=React.lazy(()=>import("../component/Admin/Adminroute.jsx"))
const  VendorRoute=React.lazy(()=>import("../component/vendor/Vendorrouter.jsx"))
console.log("called router");
const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <><Navbar /><Home /></>
    },
    // {
    //     path: "/accessapi",
    //     element: <><Navbar /><Accessstoredata /></>
    // },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/vendorlogin",
        element: <VendorLogin />
    },
    {
        path: "/vendorregister",
        element: <VendorRegister />
    },
    {
        path: "/becomevendor",
        element: <><Mainvendor /></>,
    },
    {
        path: "vendor/*",
        element: <Suspense fallback={LoaderCompo}><VendorRoute /></Suspense>
    },
    {
        path: "admin/*",
        element: <Suspense fallback={LoaderCompo}><AdminCompoRoute /></Suspense>
    },

]);
export default MainRouter