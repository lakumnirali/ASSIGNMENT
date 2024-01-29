import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from 'react-redux';
import CustomStore from './store/CustomStore.jsx'
import { RouterProvider } from 'react-router-dom';
import MainRouter from './commancomponent/MainRouter.jsx'
const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log("main index called ");
root.render(
  <Provider store={CustomStore}>
    <RouterProvider router={MainRouter} />
  </Provider>
);


