/* STAY Step 2 : Choix du spécialiste */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Composant StayStep2
function StayStep2({ formData, onInputChange }) {

    // State pour stocker la liste des spécialistes
    const [specialists, setSpecialists] = useState(null);

    // State pour gérer les erreurs
    const [error, setError] = useState(null);

    // Effet au montage pour récupérer la liste des médecins liés à la spécialité sélectionnée
    useEffect(() => {        
        const getSpecialists = async () => {
            try {                                
                // Appel à l'API pour récupérer la liste des médecins liés à la spécialité sélectionnée
                const response = await axios.get(`http://127.0.0.1:8000/api/doctors/${formData.step1[0]}`);                    
                const data = response.data;

                // Transformation des données pour les adapter à l'affichage
                const tableau = data.map(item => {
                    const fullName = `${item.user.firstName} ${item.user.lastName}`;
                    return [item.id, fullName];
                });
                
                // Mise à jour du state avec la liste des spécialistes
                setSpecialists(tableau);
                
            } catch (error) {                
                // Gestion des erreurs en cas de problème lors de la récupération des médecins
                setError("Erreur lors de la récupération des médecins");
            }
        };

        // Appel de la fonction pour récupérer les médecins au montage du composant
        getSpecialists();
    }, [formData.step1]);  

    return (
        <>
            {/* Affichage du titre de l'étape */}
            <h4 className="stay__card-subtitle">Choisissez un spécialiste</h4>
            
            {/* Affichage de la liste des spécialistes */}
            <ul className="stay__list">
                {/* Affichage d'un message d'erreur en cas d'erreur */}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                
                {/* Affichage de la liste des spécialistes */}
                {specialists !== null ? (
                    specialists && specialists.length > 0 ? (
                        specialists.map((specialist, index) => (
                            <li key={index} className="stay__item" onClick={() => onInputChange([specialist[0], specialist[1]])}>
                                {specialist[1]}
                            </li>
                        ))
                    ) : (
                        <p>Aucun spécialiste disponible</p>
                    )
                ) : (
                    <p>Chargement des données...</p>
                )}
            </ul>   
        </>
    );
}

// Exportation du composant StayStep2
export default StayStep2;
