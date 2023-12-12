// Profil page
import React from "react";
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Accessibility from "../components/Accessibility";
import Profile from "../components/Profile";

function ProfilePage() {  

  // Context d'authentification
  const { isAuthenticated } = useAuth();
  
  return (
    isAuthenticated ? (
      <>
        <Header/>
        <main>
          <Profile />
        </main>
        <Footer/>
        <Accessibility/>
      </>      
    ) : (
      <Navigate to="/login" />
    )
  );
}

export default ProfilePage;