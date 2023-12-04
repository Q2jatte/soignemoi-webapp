// Header Navbar
import '../css/header.css';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import person from '../assets/icon/person.svg';


function Header() {  
    
    const [showLinks, setShowLinks] = useState(false);

    // Context d'authentification
    const { isAuthenticated, logout } = useAuth();

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    // Utilisation de useEffect pour forcer la mise à jour du composant lorsque isAuthenticated change
    useEffect(() => {
        // Mettez à jour un état local qui n'a pas d'impact sur le rendu
        console.log("isAuthenticated change to : "+ isAuthenticated);        
    }, [isAuthenticated]);
  
    return (    
        <header className="header">
            <div className={`header__content flux ${showLinks ? 'header__menu-show' : 'header__menu-hide'}`}>
                <div className="header__logo"></div>
                <ul className={`header__links ${showLinks ? 'header__menu-show' : 'header__menu-hide'}`}>
                    <li className="header__item"><Link to="/" className="header__link">Accueil</Link></li>
                    <li className="header__item"><a href="" className="header__link">Séjour</a></li>
                    <li className="header__item"><a href="" className="header__link">Services</a></li>
                    <li className="header__item"><a href="" className="header__link">A propos</a></li>
                    <hr className="header__divider header__display-show"></hr>
                    {isAuthenticated ? (
                        <React.Fragment>
                            <li className="header__item"><Link to="/profile" className="header__link--auth">Mon compte</Link></li>
                            <li className="header__item"><Link to="/login" className="header__link--auth">Se connecter</Link></li>
                        </React.Fragment>                  
                    ) : (
                        <li className="header__item"><Link to="/login" className="header__link--auth">Se connecter</Link></li>                    
                    )}
                </ul>                
                <button className="header__burger" onClick={handleShowLinks}>
                    <span className="header__burger--bar"></span>            
                </button>
                {isAuthenticated ? (
                    <React.Fragment>
                        <Link to="/profile" className="header__display-hide">
                            <button><img src={person} alt="icone du profil"/></button>
                        </Link>
                        <button className="min-button button-orange header__display-hide" onClick={logout}>Se déconnecter</button>
                    </React.Fragment>                    
                ) : (
                    <Link to="/login" className="header__display-hide">
                        <button className="min-button button-orange">Se connecter</button>
                    </Link>
                )}                
            </div>        
        </header>
    );
}

export default Header