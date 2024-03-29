/* SignUp Form : enregistrement d'un nouvel utilisateur */

// Importation des bibliothèques nécessaires
import { useState } from 'react';
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";
import '../css/loginSignUpForm.css';

// URL de l'API
const apiUrl = import.meta.env.VITE_API_ROOT_URL;
// Clé du site Recaptcha provenant de .env
const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
const recaptchaSecretKey = import.meta.env.VITE_RECAPTCHA_SECRET_KEY;

// Fonction principale du composant SignUpForm
function SignUpForm() {  

    // États pour stocker les valeurs du formulaire
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeat, setRepeat] = useState('');
    const role = ['ROLE_USER'];
    const [error, setError] = useState(null);

    // État pour stocker la valeur du Captcha
    const [recaptchaValue, setRecaptchaValue] = useState(null);

    // Initialisation de la navigation
    const navigate = useNavigate();

    // Fonction de gestion de la soumission du formulaire
    const handleSignup = async (e) => {
        e.preventDefault();
        
        // Valider la complexité du mot de passe
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
        if (!passwordRegex.test(password)) {
            setError("Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial.");
            return;
        }

        // Valider la répétition du mot de passe
        if (password !== repeat) {
            setError("Les mots de passe ne correspondent pas.");
            return;
        }
  
        try {
            // Effectuer la vérification du Captcha
            const captchaData = {
                secret: recaptchaSecretKey,
                captcha: recaptchaValue,
            };
            const captchaVerificationResponse = await axios.post(`${apiUrl}/recaptchaverify`, captchaData, {
                headers: {
                    'Content-Type': 'application/json',                         
                },
            });
            const isValidCaptcha = captchaVerificationResponse.data.success;

            if (isValidCaptcha){
                // Données d'inscription
                const signupData = {
                    firstName: firstName,
                    lastName: lastName,
                    address: address,
                    email: email,
                    password: password,
                    roles: role,
                };  

                // Appel de l'API pour l'enregistrement de l'utilisateur
                const response = await axios.post(`${apiUrl}/user/signup`, signupData, {
                    headers: {
                    'Content-Type': 'application/json',                         
                    },
                });
                // Redirection vers la page /signup_success en cas de succès
                navigate('/signup_success');
            } else {
                setError("Le Captcha n'est pas valide. Veuillez réessayer.");
            }
            
        } catch (error) {
            // Gestion des erreurs
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
                setError("La création de compte n'a pas pu être effectuée.");
            } else {
                // Autres erreurs
                setError("Une erreur inattendue s'est produite : " + error);
            }           
        }
    };    

    // Rendu du composant
    return (
        <form className="signup__form" onSubmit={handleSignup}>            
            <input type="text" className="signup__input" id="signup-firstname" name="signup-firstname" placeholder="Prénom" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />            
            <input type="text" className="signup__input" id="signup-lastname" name="signup-lastname" placeholder="Nom" value={lastName} onChange={(e) => setLastName(e.target.value)} required />   
            <input type="text" className="signup__input" id="signup-address" name="signup-address" placeholder="Adresse complète" value={address} onChange={(e) => setAddress(e.target.value)}/>                   
            <input type="email" className="signup__input" id="signup-email" name="signup-email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />            
            <input type="password" className="signup__input" id="signup-password" name="signup-password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <p className="signup__text">Le mot de passe doit contenir au minimum 12 caractères, 1 chiffre, 1 majuscule et 1 caractère spécial</p>
            <input type="password" className="signup__input" id="signup-repeat" name="signup-repeat" placeholder="Répéter le mot de passe" value={repeat} onChange={(e) => setRepeat(e.target.value)} required />
            <p className="signup__text">En cochant cette case, je confirme avoir lu, compris et accepté <Link className="signup__link" to="/legal">les termes et conditions légales d'utilisation de ce site web.</Link></p>
            <div className="signup__group">
                <input className="signup__checkbox" type="checkbox" id="signup-legal" name="signup-legal" required/>
                <label className="signup__label" htmlFor="signup-legal">J'accèpte les termes et conditions légales d'utilisation</label>
            </div>
            <ReCAPTCHA
                sitekey={recaptchaSiteKey}
                onChange={(value) => setRecaptchaValue(value)}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit" className="min-button button-green">S'enregistrer</button>
        </form>
    );
}

// Exportation du composant SignUpForm en tant que composant par défaut
export default SignUpForm;
