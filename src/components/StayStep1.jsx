/* STAY Step 1 : Choix de la spécialité */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Composant StayStep1
function StayStep1({ formData, onInputChange }) {

    // State pour stocker la liste des spécialités
    const [specialites, setSpecialites] = useState(null);

    // State pour gérer les erreurs
    const [error, setError] = useState(null);

    // Effet au montage pour récupérer la liste des services depuis l'API
    useEffect(() => {    
        const getServices = async () => {
            try {
                // Appel à l'API pour récupérer la liste des services
                const response = await axios.get('http://127.0.0.1:8000/api/services');                    
                const data = response.data;

                // Transformation des données pour les adapter à l'affichage
                const tableau = data.map(item => [item.id, item.name]);
                
                // Mise à jour du state avec la liste des spécialités
                setSpecialites(tableau);
            } catch (error) {                
                // Gestion des erreurs en cas de problème lors de la récupération des services
                setError("Erreur lors de la récupération des services");
                console.error(error);                  
            }
        };

        // Appel de la fonction pour récupérer les services au montage du composant
        getServices();
    }, []);        

    return (
        <>
            {/* Affichage du titre de l'étape */}
            <h4 className="stay__card-subtitle">Choisissez une spécialité</h4>
            
            {/* Affichage de la liste des spécialités */}
            <ul className="stay__list">
                {/* Affichage d'un message d'erreur en cas d'erreur */}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                
                {/* Affichage de la liste des spécialités */}
                {specialites !== undefined ? (
                    specialites && specialites.length > 0 ? (
                        specialites.map((specialite, index) => (
                            <li key={index} className="stay__item" onClick={() => onInputChange([specialite[0], specialite[1]])}>
                                {specialite[1]}
                            </li>
                        ))
                    ) : (
                        <p>Aucun service disponible</p>
                    )
                ) : (
                    <p>Chargement des données...</p>
                )}
            </ul>   
        </>
    );
}

// Exportation du composant StayStep1
export default StayStep1;
