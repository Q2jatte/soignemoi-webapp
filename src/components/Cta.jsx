// click To Action : 3 boutons
import { Link } from 'react-router-dom';
import '../css/cta.css';
import calendar from '../assets/icon/calendar-white.svg';
import urgence from '../assets/icon/urgence-white.svg';
import localize from '../assets/icon/localize-white.svg';



function Cta() {   
  
    return (    
      <section className="cta flux">
        <Link to="/stay">
            <button className="button button-green">
                <div className="cta__content">
                    <img className="cta__icon" src={calendar} alt=""/>
                    <h3>Planifiez<br/>votre séjour</h3>
                </div>            
            </button>
        </Link>
        <a href="tel:+33123456789">
            <button className="button button-orange">
                <div className="cta__content">
                    <img className="cta__icon" src={urgence} alt=""/>
                    <h3>Urgence</h3>
                </div>            
            </button>
        </a>
        <Link to="/access">
            <button className="button button-green">
                <div className="cta__content">
                    <img className="cta__icon" src={localize} alt=""/>
                    <h3>Accédez au<br/>centre hospitalier</h3>
                </div>            
            </button>
        </Link>
      </section>
    );
  }
  
  export default Cta;