/* Login & Sign Up Form : connexion et enregistrement des users */

import '../css/loginSignUpForm.css';
import { useState } from "react";

import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

function LoginSignUpForm() {  
    
    const [isLoginMode, setIsLoginMode] = useState(true);

    const handleToggleMode = () => {
        setIsLoginMode(!isLoginMode);
    };

    const getTitle = () => {
        return isLoginMode ? "Se connecter" : "Créer un compte";
    };

    return (
        <section className="loginSignUp flux">
            <div className="loginSignUp__container">
                <h2>{getTitle()}</h2>
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
                {isLoginMode ? <LoginForm/> : <SignUpForm/>}
            </div>
        </section>
    );
}

export default LoginSignUpForm;