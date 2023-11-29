/* Login Form : authentification des users */

import '../css/loginSignUpForm.css';


function LoginForm() {  
    

    return (
        <form className="login__form">
            <input type="email" className="login__input" id="login__email" name="login__email" placeholder='Email' required />            
            <input type="password" className="login__input" id="login__password" name="login__password" placeholder='Mot de passe' required />
            <p><a href="#">Mot de passe oublié ?</a></p>
            <button type="submit" className="min-button button-green">Se connecter</button>
        </form>  
    );
}

export default LoginForm;