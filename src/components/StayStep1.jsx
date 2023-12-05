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
            <h4 className="stay__card-subtitle">Choisissez une spécialité</h4>
            <ul className="stay__list">
            {specialites.map((specialite, index) => (
                <li key={index} className="stay__item" onClick={() => onInputChange(specialite)}>
                {specialite}
                </li>
            ))}
            </ul>   
        </>
    );
};

export default StayStep1;