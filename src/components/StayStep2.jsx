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
            <h2>Choisissez un spécialiste</h2>
            <ul className="step__list">
            {specialists.map((specialist, index) => (
                <li key={index} className="step__item" onClick={() => onInputChange(specialist)}>
                {specialist}
                </li>
            ))}
            </ul>   
        </>
    );
};

export default StayStep2;