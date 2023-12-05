/* STAY Step 2 : choix du spécialiste */
import React from 'react';

function StayStep2({ formData, onInputChange }) {

    const specialists = [
        'Dr. Olivia Bennett',
        'Dr. Alexander Harper',
        'Dr. Maya Rodriguez',
    ];

    return (
        <>
            <h4 className="stay__card-subtitle">Choisissez un spécialiste</h4>
            <ul className="stay__list">
            {specialists.map((specialist, index) => (
                <li key={index} className="stay__item" onClick={() => onInputChange(specialist)}>
                {specialist}
                </li>
            ))}
            </ul>   
        </>
    );
};

export default StayStep2;