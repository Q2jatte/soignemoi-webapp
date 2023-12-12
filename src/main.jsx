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
import ProfilePage from './pages/ProfilePage';
import StayPage from './pages/StayPage';
import ErrorPage from './pages/Error404';

import './css/_reset.css';
import './css/main.css';
import SignupSuccessPage from './pages/SignupSuccessPage';



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
    element: <ProfilePage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup_success",
    element: <SignupSuccessPage/>,
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