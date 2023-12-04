// Profil page
import React from "react";
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

function Profile() {  

  // Context d'authentification
  const { isAuthenticated } = useAuth();
  
  return (
    isAuthenticated ? (
      <p>Page du profil</p>
    ) : (
      <Navigate to="/login" />
    )
  );
}

export default Profile;