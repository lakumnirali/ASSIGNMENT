import React from 'react';
import { useRoutes } from 'react-router-dom';
import VendorDash from "./pages/Vendorlayout"
import Vendordash from "./pages/dashboard/VendorDash.jsx"
const Vendorrouter = () => {
    const routes = useRoutes([
        {
            path: "dashboard",
            element: <VendorDash />,
            children: [
                {
                    path: "vendorsystem",
                    element: <Vendordash />
                }
            ]
        }
    ]);
    return routes
};

export default Vendorrouter;