/* Login & Sign Up Form : connexion et enregistrement des utilisateurs */

// Importation des styles CSS
import '../css/loginSignUpForm.css';

// Importation du hook useState de React
import { useState } from "react";

// Importation des composants de formulaire de connexion et d'enregistrement
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

// Définition du composant fonctionnel LoginSignUpForm
function LoginSignUpForm() {  
    
    // État pour gérer le mode de formulaire (connexion ou enregistrement)
    const [isLoginMode, setIsLoginMode] = useState(true);

    // Fonction pour basculer entre les modes de formulaire
    const handleToggleMode = () => {
        setIsLoginMode(!isLoginMode);
    };

    // Fonction pour obtenir le titre dynamique en fonction du mode
    const getTitle = () => {
        return isLoginMode ? "Se connecter" : "Créer un compte";
    };

    // Rendu du composant
    return (
        <section className="loginSignUp flux">
            {/* Conteneur principal */}
            <div className="loginSignUp__container">
                {/* Titre du formulaire dynamique */}
                <h2>{getTitle()}</h2>
                
                {/* Boutons de bascule entre les modes de formulaire */}
                <div className="loginSignUp__segmented-control">
                    <button
                        className={`loginSignUp__button loginSignUp__button-left ${isLoginMode ? 'loginSignUp__button-active' : ''}`}
                        onClick={handleToggleMode}
                    >
                        Se connecter
                    </button>
                    <button
                        className={`loginSignUp__button loginSignUp__button-right ${!isLoginMode ? 'loginSignUp__button-active' : ''}`}
                        onClick={handleToggleMode}
                    >
                        S'enregistrer
                    </button>
                </div>
                
                {/* Affichage du formulaire correspondant au mode actuel */}
                {isLoginMode ? <LoginForm/> : <SignUpForm/>}
            </div>
        </section>
    );
}

// Exportation du composant LoginSignUpForm en tant que composant par défaut
export default LoginSignUpForm;
