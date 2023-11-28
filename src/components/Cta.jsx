// click To Action : 3 boutons
import '../css/cta.css';
import calendar from '../assets/icon/calendar-white.svg';
import urgence from '../assets/icon/urgence-white.svg';
import localize from '../assets/icon/localize-white.svg';


function Cta() {   
  
    return (    
      <section className="cta flux">
        <button className="button button-green">
            <div className="cta__content">
                <img className="cta__icon" src={calendar} alt=""/>
                <h3>Plannifiez<br/>votre séjour</h3>
            </div>            
        </button>
        <button className="button button-orange">
            <div className="cta__content">
                <img className="cta__icon" src={urgence} alt=""/>
                <h3>Urgence</h3>
            </div>            
        </button>
        <button className="button button-green">
            <div className="cta__content">
                <img className="cta__icon" src={localize} alt=""/>
                <h3>Accédez au<br/>centre hospitalier</h3>
            </div>            
        </button>
      </section>
    );
  }
  
  export default Cta;