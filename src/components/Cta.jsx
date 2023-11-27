// click To Action
import '../css/cta.css';
import calendar from '../assets/img/calendar-white.svg'


function Cta() {   
  
    return (    
      <section className="cta">
        <button className="cta__button">
            <div className="cta__content">
                <img src={calendar} alt=""/>
                <h3>Plannifiez votre séjour</h3>
            </div>            
        </button>
        <button className="cta__button">
            <div className="cta__content">
                <img src={calendar} alt=""/>
                <h3>Plannifiez votre séjour</h3>
            </div>            
        </button>
        <button className="cta__button">
            <div className="cta__content">
                <img src={calendar} alt=""/>
                <h3>Plannifiez votre séjour</h3>
            </div>            
        </button>
      </section>
    );
  }
  
  export default Cta;