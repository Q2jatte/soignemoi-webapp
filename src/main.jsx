import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';

import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import StayPage from './pages/StayPage';
import ErrorPage from './pages/Error404';

import './css/_reset.css';
import './css/main.css';



// Toutes les routes de l'app
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
  {
    path: "/profile",
    element: <Profile/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/stay",
    element: <StayPage/>,
    errorElement: <ErrorPage />,
  },
]);

function App() {

  return (
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>       
    </React.StrictMode>  
  );    
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />);