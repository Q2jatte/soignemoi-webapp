/* STAY Step 1 : choix de la spécialité */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StayStep1({ formData, onInputChange }) {

    // Stockage des services
    const [specialites, setSpecialites] = useState(null);

    const [error, setError] = useState(null);

    // Récupération des services
    useEffect(() => {    
        const getServices = async () => {
            try {

                const response = await axios.get('http://127.0.0.1:8000/api/services');                    
                const data = response.data;
                var tableau = [];
                data.forEach(function(item) {                        
                    var row = [];
                    row.push(item.id, item.name);
                    tableau.push(row);
                });   
                console.log(tableau);                           
                setSpecialites(tableau);
                
            } catch (error) {                
                setError("Erreur lors de la recupération des services");  
                console.log(error);                  
            }
        };
        getServices();
    }, []);        

    return (
        <>
            <h4 className="stay__card-subtitle">Choisissez une spécialité</h4>
            <ul className="stay__list">
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {specialites !== undefined ? (
                specialites && specialites.length > 0 ? (
                    specialites.map((specialite, index) => (
                        <li key={index} className="stay__item" onClick={() => onInputChange([specialite[0], specialite[1]])}>
                            {specialite[1]}
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

export default StayStep1;