import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//import App from './App.jsx';
import Home from './pages/Home';
import Login from './pages/Login';
import ErrorPage from './pages/Error404';

import './css/_reset.css';
import './css/main.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/login",
    element: <Login/>,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    <RouterProvider router={router} />   
  </React.StrictMode>
);
