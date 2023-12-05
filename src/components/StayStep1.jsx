/* STAY Step 1 : choix de la spécialité */
import React from 'react';

function StayStep1({ formData, onInputChange }) {

    const specialites = [
        'Cardiologie',
        'Imagerie - Radiologie',
        'ORL',
        'Pédiatrie',
        'Pneumologie',
        'Traumatologie',
    ];

    return (
        <>
            <h2>Choisissez une spécialité</h2>
            <ul className="step__list">
            {specialites.map((specialite, index) => (
                <li key={index} className="step__item" onClick={() => onInputChange(specialite)}>
                {specialite}
                </li>
            ))}
            </ul>   
        </>
    );
};

export default StayStep1;