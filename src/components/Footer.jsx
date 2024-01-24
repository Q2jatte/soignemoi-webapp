/* Footer : pied de page */
import { Link } from 'react-router-dom';

// Importation des styles CSS
import '../css/footer.css';

// Importation des icônes
import facebook from '../assets/icon/facebook.svg';
import linkedin from '../assets/icon/linkedin.svg';
import youtube from '../assets/icon/youtube.svg';

// Définition du composant fonctionnel Footer
function Footer() {  

    // Année en cours
    var date = new Date();
    var anneeEnCours = date.getFullYear();

    // Rendu du composant
    return (
        <footer className="footer">
            {/* Conteneur du pied de page */}
            <div className="footer__container flux">
                {/* Bloc du logo SoigneMoi */}
                <div className="footer__block">
                    <div className="footer__logo"></div>
                    <span>SoigneMoi</span>
                </div>

                {/* Ligne de séparation */}
                <hr className="footer__divider"></hr>

                {/* Navigation des liens utiles */}
                <nav className="footer__nav">
                    <h3 className="green">Liens utiles</h3>
                    <ul className="footer__items">
                        <li className="footer__item">Votre compte</li>
                        <li className="footer__item"><Link to="/legal">Mentions légales</Link></li>
                        <li className="footer__item">Aide</li>
                    </ul>
                </nav>

                {/* Navigation des informations de contact */}
                <nav className="footer__nav">
                    <h3 className="orange">Contact</h3>
                    <ul className="footer__items">
                        <li className="footer__item">Wattrelos, NORD 59150, FR</li>
                        <li className="footer__item">info@soignemoi.fr</li>
                        <li className="footer__item">01 23 45 67 89</li>
                    </ul>
                </nav>

                {/* Ligne de séparation */}
                <hr className="footer__divider"></hr>

                {/* Navigation des liens sociaux */}
                <nav className="footer__social">
                    <ul className="footer__social-items">
                        <li className="footer__social-item"><img className="footer__social-icon" src={facebook} alt="Icone de Facebook"/></li>
                        <li className="footer__social-item"><img className="footer__social-icon" src={linkedin} alt="Icone de Linkedin"/></li>
                        <li className="footer__social-item"><img className="footer__social-icon" src={youtube} alt="Icone de Youtube"/></li>
                    </ul>
                </nav>

                {/* Ligne de séparation avec condition d'affichage */}
                <hr className="footer__divider footer__display"></hr>
            </div>

            {/* Mention de copyright */}
            <p className="footer__copyright">© COPYRIGHT {anneeEnCours} - SOIGNEMOI CH</p>
        </footer>
    );
}

// Exportation du composant Footer en tant que composant par défaut
export default Footer;
