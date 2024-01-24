/* STAY Step 3 : Commentaire du patient */
import React, { useState } from 'react';
import chevronRight from '../assets/icon/chevron-right.svg';

// Composant StayStep3
function StayStep3({ formData, onInputChange }) {  
    
    // State pour stocker la valeur temporaire du champ de commentaire
    const [tempInputValue, setTempInputValue] = useState("");

    // Fonction pour gérer le changement de la valeur temporaire du champ
    const handleInputChange = (e) => {
        setTempInputValue(e.target.value);
    };

    // Fonction pour passer à l'étape suivante et transmettre la valeur du champ de commentaire
    const handleNextClick = () => {
        onInputChange(tempInputValue);
    };

    return (
        <>
            {/* Affichage du titre de l'étape */}
            <h4 className="stay__card-subtitle">Quelle est le motif de votre séjour ?</h4>
            
            {/* Champ de saisie du commentaire */}
            <input
                type="text"
                className="stay__input"
                value={tempInputValue}
                onChange={handleInputChange}
            />
            
            {/* Pied de la carte avec le bouton pour passer à l'étape suivante */}
            <div className="stay__footer">
                <button className="min-button button-green stay__button" onClick={handleNextClick}>
                    <span>Suivant</span>
                    <img src={chevronRight} alt="chevron vers la droite"/>
                </button>
            </div>
        </>
    );
}

// Exportation du composant StayStep3
export default StayStep3;
