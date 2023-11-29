/* SignUp Form : enregistrement des users */

import '../css/loginSignUpForm.css';


function SignUpForm() {  
    

    return (

        <form className="signup__form">            
            <input type="text" className="signup__input" id="signup-firstname" name="signup-firstname" placeholder="Prénom" required />            
            <input type="text" className="signup__input" d="signup-lastname" name="signup-lastname" placeholder="Nom" required />            
            <input type="text" className="signup__input" id="signup-address" name="signup-address" placeholder="Adresse complète" required />            
            <input type="email" className="signup__input" id="signup-email" name="signup-email" placeholder="Email" required />            
            <input type="password" className="signup__input" id="signup-password" name="signup-password" placeholder="Mot de passe" required />
            <button type="submit" className="min-button button-green">S'enregistrer</button>
        </form>
        
    );
}

export default SignUpForm;