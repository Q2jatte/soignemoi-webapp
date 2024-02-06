// Click To Action : 3 boutons
import { Link } from 'react-router-dom';

// Importation des styles CSS
import '../css/cta.css';

// Importation des icônes
import calendar from '../assets/icon/calendar-white.svg';
import urgence from '../assets/icon/urgence-white.svg';
import localize from '../assets/icon/localize-white.svg';

// Définition du composant fonctionnel Cta
function Cta() {   
  
    // Rendu du composant
    return (    
      <section className="cta flux">
        {/* Bouton pour planifier un séjour avec lien vers la page "stay" */}
        <Link to="/stay">
            <button className="button button-green">
                <div className="cta__content">
                    {/* Icône du calendrier */}
                    <img className="cta__icon" src={calendar} alt=""/>
                    {/* Titre du bouton */}
                    <h3>Planifiez<br/>votre séjour</h3>
                </div>            
            </button>
        </Link>

        {/* Bouton d'urgence avec lien vers le numéro de téléphone */}
        <a href="tel:+33123456789">
            <button className="button button-orange">
                <div className="cta__content">
                    {/* Icône d'urgence */}
                    <img className="cta__icon" src={urgence} alt=""/>
                    {/* Titre du bouton */}
                    <h3>Urgence</h3>
                </div>            
            </button>
        </a>

        {/* Bouton pour accéder au centre hospitalier avec lien vers la page "access" */}
        <Link to="/access">
            <button className="button button-green">
                <div className="cta__content">
                    {/* Icône de localisation */}
                    <img className="cta__icon" src={localize} alt=""/>
                    {/* Titre du bouton */}
                    <h3>Accédez au<br/>centre hospitalier</h3>
                </div>            
            </button>
        </Link>
      </section>
    );
  }
  
  // Exportation du composant Cta en tant que composant par défaut
  export default Cta;
