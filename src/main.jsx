import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";

import dotenv from 'dotenv';

import { AuthProvider } from './contexts/AuthContext';

import Home from './pages/Home';
import Login from './pages/Login';
import ProfilePage from './pages/ProfilePage';
import StayPage from './pages/StayPage';
import SignupSuccessPage from './pages/SignupSuccessPage';
import MapPage from './pages/MapPage';
import LegalDisclaimersPage from './pages/LegalDisclaimersPage';
import ErrorPage from './pages/Error404';

import './css/_reset.css';
import './css/main.css';


// Chargez les variables d'environnement depuis le fichier .env
//dotenv.config();

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
  {
    path: "/access",
    element: <MapPage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/legal",
    element: <LegalDisclaimersPage/>,
    errorElement: <ErrorPage />,
  }
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