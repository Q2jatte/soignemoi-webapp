/* Accessibility : options d'accessibilité */

import '../css/accessibility.css';
import human from '../assets/icon/human.svg';

function Accessibility() {   

    return (
        <div className="accessibility">
            <button className="accessibility__button">
                <img src={human} alt="Options d'accessibilité"/>
            </button>
        </div>
    );
}

export default Accessibility;