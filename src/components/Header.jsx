// Header Navbar
import '../css/header.css';
import { useState } from "react";


function Header() {  
    
    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
  
    return (    
        <header className="header">
            <div className={`header__content flux ${showLinks ? 'header__menu-show' : 'header__menu-hide'}`}>
                <div className="header__logo"></div>
                <ul className={`header__links ${showLinks ? 'header__menu-show' : 'header__menu-hide'}`}>
                    <li className="header__item"><a href="" className="header__link">Accueil</a></li>
                    <li className="header__item"><a href="" className="header__link">Séjour</a></li>
                    <li className="header__item"><a href="" className="header__link">Services</a></li>
                    <li className="header__item"><a href="" className="header__link">A propos</a></li>
                    <hr className="header__divider header__display-show"></hr>
                    <li className="header__item header__display-show"><a href="" className="header__link">Se connecter</a></li>
                </ul>
                <button className="header__burger" onClick={handleShowLinks}>
                    <span className="header__burger--bar"></span>            
                </button>
                <button className="header__button header__display-hide">Se connecter</button>
            </div>        
        </header>
    );
}

export default Header