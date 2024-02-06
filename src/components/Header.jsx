// Header Navbar
import '../css/header.css';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import person from '../assets/icon/person.svg';

// Définition du composant fonctionnel Header
function Header() {  
    
    // État pour gérer l'affichage des liens du menu
    const [showLinks, setShowLinks] = useState(false);

    // Contexte d'authentification
    const { isAuthenticated, logout } = useAuth();

    // Fonction pour basculer l'affichage des liens du menu
    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    }

    // Utilisation de useEffect pour forcer la mise à jour du composant lorsque isAuthenticated change
    useEffect(() => {
        // Mettez à jour un état local qui n'a pas d'impact sur le rendu
        console.log("isAuthenticated change to : "+ isAuthenticated);        
    }, [isAuthenticated]);
  
    // Rendu du composant
    return (    
        <header className="header">
            {/* Contenu du header */}
            <div className={`header__content flux ${showLinks ? 'header__menu-show' : 'header__menu-hide'}`}>
                {/* Logo redirigeant vers la page d'accueil */}
                <Link to="/"><div className="header__logo"></div></Link>
                
                {/* Liens du menu */}
                <ul className={`header__links ${showLinks ? 'header__menu-show' : 'header__menu-hide'}`}>
                    <li className="header__item"><Link to="/" className="header__link">Accueil</Link></li>
                    <li className="header__item"><Link to="/stay" className="header__link">Séjour</Link></li>
                    <li className="header__item"><Link to="/activities" className="header__link">Services</Link></li>
                    <li className="header__item"><Link to="/presentation" className="header__link">A propos</Link></li>

                    {/* Ligne de séparation avec condition d'affichage */}
                    <hr className="header__divider header__display-show"></hr>

                    {/* Liens conditionnels en fonction de l'authentification */}
                    {isAuthenticated ? (
                        <React.Fragment>
                            <li className="header__item"><Link to="/profile" className="header__link--auth">Mon compte</Link></li>
                            <li className="header__item"><span className="header__link--auth" onClick={logout}>Se déconnecter</span></li>
                        </React.Fragment>                  
                    ) : (
                        <li className="header__item"><Link to="/login" className="header__link--auth">Se connecter</Link></li>                    
                    )}
                </ul>                
               
                {/* Bouton du menu hamburger */}
                <button className="header__burger" onClick={handleShowLinks}>
                    <span className="header__burger--bar"></span>            
                </button>

                {/* Boutons et icône du profil conditionnels en fonction de l'authentification */}
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

// Exportation du composant Header en tant que composant par défaut
export default Header;
