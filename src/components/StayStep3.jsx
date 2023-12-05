/* STAY Step 3 : commentaire du patient */
import React, { useState } from 'react';

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
            <h2>Quelle est le motif de votre séjour ?</h2>
            <input
                type="text"
                value={tempInputValue}
                onChange={handleInputChange}
            />
            <button onClick={handleNextClick}>Suivant</button>
        </>
    );
};

export default StayStep3;