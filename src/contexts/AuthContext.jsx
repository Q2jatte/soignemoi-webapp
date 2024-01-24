// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

// Création du contexte
const AuthContext = createContext();

// Création du fournisseur de contexte
export const AuthProvider = ({ children }) => {  
  // État d'authentification initialisé à false
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // État du token initialisé à null
  const [token, setToken] = useState(null);

  // Fonction pour gérer l'action de connexion
  const login = (token) => {  
    setIsAuthenticated(true);  
    setToken(token);
  };

  // Fonction pour gérer l'action de déconnexion
  const logout = () => {
    setIsAuthenticated(false);
    setToken(null);
  };

  // Fourniture du contexte et de ses valeurs aux composants enfants
  return (
    <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte d'authentification
export const useAuth = () => {
  return useContext(AuthContext);
};
