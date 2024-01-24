/* Login Form : authentification des utilisateurs */
import React from 'react';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

import axios from 'axios';
import '../css/loginSignUpForm.css';

// Définition du composant fonctionnel LoginForm
function LoginForm() {  

  // États pour les valeurs du formulaire et les messages d'erreur
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // Contexte d'authentification
  const { login } = useAuth();
  
  // Fonction pour générer un cookie HTTP-only sécurisé
  const setHttpOnlySecureCookie = (cookieName, cookieValue, expirationDays = 7) => {
    // Calcul de la date d'expiration du cookie
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + expirationDays);

    // Options du cookie
    const cookieOptions = {
      path: '/',  // Chemin du cookie (modifiable selon vos besoins)
      expires: expirationDate,
      secure: false, // TODO true pour https
      httpOnly: true,
      sameSite: 'strict',
      domain: '127.0.0.1'
    };

    // Formatage du cookie
    const formattedCookie = `${cookieName}=${cookieValue}; ${Object.entries(cookieOptions).map(([key, value]) => `${key}=${value}`).join('; ')}`;
    
    // Création du cookie
    document.cookie = formattedCookie;
   
    console.log("Cookie enregistré : " + formattedCookie);    
  };  

  // Fonction pour gérer le processus de connexion
  const handleLogin = async (e) => {
      e.preventDefault();

      try {
          const loginData = {
              username: email,
              password: password,
          };          

          // Envoi de la requête au serveur pour la vérification des identifiants
          const response = await axios.post('http://127.0.0.1:8000/api/login_check', loginData, {
              headers: {
              'Content-Type': 'application/json',                         
              },
          });

          // Enregistrement du token JWT
          const token = response.data.token;
          //setHttpOnlySecureCookie('BEARER', token);

          // Mise à jour du contexte d'authentification
          login({ token: token });         

          // Redirection
          window.history.back();
      
      } catch (error) {
          if (error.response) {
              // La requête a été effectuée, mais le serveur a répondu avec un code d'erreur
              if (error.response.status === 401) {
                // Traitement spécifique pour une erreur 401 (Non autorisé)
                setError("Identifiants incorrects. Veuillez réessayer.");
              } else {
                // Autres erreurs de réponse du serveur
                setError("Une erreur s'est produite lors de la requête de login.");
              }
            } else if (error.request) {
              // La requête n'a pas été effectuée
              setError("La requête de login n'a pas pu être effectuée.");
            } else {
              // Autres erreurs
              setError("Une erreur inattendue s'est produite : " + error);
            }           
      }
  };    

  // Rendu du composant
  return (
      <form className="login__form" onSubmit={handleLogin}>
          {/* Champ pour l'adresse email */}
          <input type="email" className="login__input" id="login__email" name="login__email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />            
          
          {/* Champ pour le mot de passe */}
          <input type="password" className="login__input" id="login__password" name="login__password" placeholder='Mot de passe' value={password} onChange={(e) => setPassword(e.target.value)} required />
          
          {/* Lien vers la récupération du mot de passe oublié */}
          <p><a href="#">Mot de passe oublié ?</a></p>

          {/* Affichage du message d'erreur en cas d'erreur */}
          {error && <p style={{ color: 'red' }}>{error}</p>}

          {/* Bouton de soumission du formulaire */}
          <button type="submit" className="min-button button-green">Se connecter</button>
      </form>  
  );
}

// Exportation du composant LoginForm en tant que composant par défaut
export default LoginForm;
