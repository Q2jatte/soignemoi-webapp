/* STAY Step 2 : choix du spécialiste */
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

function StayStep2({ formData, onInputChange }) {

    // Stockage des services
    const [specialists, setSpecialists] = useState(null);

    const [error, setError] = useState(null);

    // Récupération des services    
    useEffect(() => {        
        const getSpecialists = async () => {

            try {                                
                const response = await axios.get(`http://127.0.0.1:8000/api/doctors/${formData.step1[0]}`);                    
                const data = response.data;                
                var tableau = [];
                data.forEach(function(item) {
                    var row = [];
                    var fullName = item.user.firstName + ' ' + item.user.lastName;
                    row.push(item.id, fullName);
                    tableau.push(row);
                });                 
                setSpecialists(tableau);
                
            } catch (error) {                
                setError("Erreur lors de la recupération des docteurs");                    
            }
        };
        getSpecialists();
    }, []);  

    return (
        <>
            <h4 className="stay__card-subtitle">Choisissez un spécialiste</h4>
            <ul className="stay__list">
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {specialists !== null ? (
                specialists && specialists.length > 0 ? (
                    specialists.map((specialist, index) => (
                        <li key={index} className="stay__item" onClick={() => onInputChange([specialist[0], specialist[1]])}>
                            {specialist[1]}
                        </li>
                    ))
                ) : (
                    <p>Aucun services</p>
                )
            ) : (
                <p>Chargement des données...</p>
            )}
            </ul>   
        </>
    );
};

export default StayStep2;