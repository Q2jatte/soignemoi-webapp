/* Login Form : authentification des users */
import React from 'react';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

import axios from 'axios';
import '../css/loginSignUpForm.css';

function StayForm() {  

  // valeurs du formulaire
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // Context d'authentification
  const { login } = useAuth();  

  return (
      <form className="login__form" onSubmit={handleLogin}>
          <input type="email" className="login__input" id="login__email" name="login__email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />          
      </form>  
  );
}

export default StayForm;