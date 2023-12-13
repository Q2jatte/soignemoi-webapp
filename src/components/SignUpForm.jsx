/* SignUp Form : enregistrement des users */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/loginSignUpForm.css';


function SignUpForm() {  

    // Valeurs du formulaire
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeat, setRepeat] = useState('');
    const role = ['ROLE_USER'];
    const [error, setError] = useState(null);

    // initialisation de history
    const navigate = useNavigate();
    // Submit du formulaire
    const handleSignup = async (e) => {
        e.preventDefault();

        // Validation de la complexité du mot de passe
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            setError("Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial.");
            return;
        }

        // Validation du repeat password
        if (password !== repeat) {
            setError("Les mots de passe ne correspondent pas.");
            return;
        }
  
        try {
            const signupData = {
                firstName: firstName,
                lastName: lastName,
                address: address,
                email: email,
                password: password,
                roles: role,
            };  
            
            console.log(signupData);
  
            const response = await axios.post('http://127.0.0.1:8000/api/user/signup', signupData, {
                headers: {
                'Content-Type': 'application/json',                         
                },
            });
            // Redirection vers la page /signup_success
            navigate('/signup_success');
            
        
        } catch (error) {
            if (error.response) {
                // La requête a été effectuée, mais le serveur a répondu avec un code d'erreur
                if (error.response.status === 401) {
                  // Traitement spécifique pour une erreur 401 (Non autorisé)
                  setError("Identifiants incorrects. Veuillez réessayer.");
                } else {
                  // Autres erreurs de réponse du serveur
                  setError("Une erreur s'est produite lors de la requête d'enregistrement.");
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
    

    return (

        <form className="signup__form" onSubmit={handleSignup}>            
            <input type="text" className="signup__input" id="signup-firstname" name="signup-firstname" placeholder="Prénom" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />            
            <input type="text" className="signup__input" id="signup-lastname" name="signup-lastname" placeholder="Nom" value={lastName} onChange={(e) => setLastName(e.target.value)} required />   
            <input type="text" className="signup__input" id="signup-address" name="signup-address" placeholder="Adresse complète" value={address} onChange={(e) => setAddress(e.target.value)}/>                   
            <input type="email" className="signup__input" id="signup-email" name="signup-email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />            
            <input type="password" className="signup__input" id="signup-password" name="signup-password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)}required />
            <input type="password" className="signup__input" id="signup-repeat" name="signup-repeat" placeholder="Répéter le mot de passe" value={repeat} onChange={(e) => setRepeat(e.target.value)} required />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit" className="min-button button-green">S'enregistrer</button>
        </form>
        
    );
}

export default SignUpForm;