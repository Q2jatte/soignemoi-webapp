/* STAY Step 3 : commentaire du patient */
import React, { useState } from 'react';
import chevronRight from '../assets/icon/chevron-right.svg';

function StayStep3({ formData, onInputChange }) {  
    
    const [tempInputValue, setTempInputValue] = useState("");

    const handleInputChange = (e) => {
        setTempInputValue(e.target.value);
    };

    const handleNextClick = () => {
        onInputChange(tempInputValue);
    };

    return (
        <>
            <h4 className="stay__card-subtitle">Quelle est le motif de votre séjour ?</h4>
            <input
                type="text"
                className="stay__input"
                value={tempInputValue}
                onChange={handleInputChange}
            />
            <div className="stay__footer">
                <button className="min-button button-green stay__button" onClick={handleNextClick}><span>Suivant</span><img src={chevronRight} alt="chevron vers la droite"/></button>
            </div>
        </>
    );
};

export default StayStep3;