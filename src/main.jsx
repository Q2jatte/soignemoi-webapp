// Importations de modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";

import dotenv from 'dotenv';

// Importation du contexte d'authentification
import { AuthProvider } from './contexts/AuthContext';

// Importations des pages de l'application
import Home from './pages/Home';
import ActivitiesPage from './pages/ActivitiesPage';
import Login from './pages/Login';
import ProfilePage from './pages/ProfilePage';
import StayPage from './pages/StayPage';
import SignupSuccessPage from './pages/SignupSuccessPage';
import MapPage from './pages/MapPage';
import LegalDisclaimersPage from './pages/LegalDisclaimersPage';
import ErrorPage from './pages/Error404';
import PresentationPage from './pages/PresentationPage';

// Importation des styles CSS
import './css/_reset.css';
import './css/main.css';

// Configuration du router avec les différentes routes de l'application
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/presentation",
    element: <PresentationPage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/activities",
    element: <ActivitiesPage/>,
    errorElement: <ErrorPage />,
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

// Composant principal de l'application
function App() {
  return (
    <React.StrictMode>
      {/* Enveloppez votre application avec le contexte d'authentification */}
      <AuthProvider>
        {/* Fournissez le router à l'ensemble de l'application */}
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  );    
}

// Montrez le composant principal (App) dans la racine de l'élément avec l'ID 'root'
ReactDOM.createRoot(document.getElementById('root')).render(<App />);