/* Profile : données personnelles */
import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { format } from "date-fns";
import fr from "date-fns/locale/fr";
import axios from 'axios';

import '../css/profile.css';

// URL de l'API
const apiUrl = import.meta.env.VITE_API_ROOT_URL;

function Profile() {
    // Contexte d'authentification
    const { token } = useAuth();
    
    // État pour stocker la réponse de getStays
    const [stays, setStays] = useState(null);

    // État pour gérer les erreurs
    const [error, setError] = useState(null);
    
    // Appel des données des séjours de l'utilisateur
    useEffect(() => {    
        const getStays = async () => {
            try {                    
                    const response = await axios.get(`${apiUrl}/stays`, {
                        headers: {
                            'Authorization': `Bearer ${token.token}`                       
                        },                        
                    });                    
                    setStays(response.data);
                
            } catch (error) {                
                setError("Erreur lors de la requête");                    
            }
        };

        getStays();
    }, []);

    // Fonction pour extraire la valeur d'un cookie
    const getCookie = (name) => {
        const cookieValue = document.cookie
        .split('; ')
        .find((row) => row.startsWith(name))
        ?.split('=')[1];
        return cookieValue;
    };

    // Fonction pour déterminer le statut du séjour (à venir, en cours, effectué)
    const getStayStatus = (entranceDate, dischargeDate) => {
        const currentDate = new Date();
        const entranceDateObj = new Date(entranceDate);
        const dischargeDateObj = new Date(dischargeDate);
    
        if (currentDate < entranceDateObj) {
          return 'à venir';
        } else if (currentDate >= entranceDateObj && currentDate <= dischargeDateObj) {
          return 'en cours';
        } else {
          return 'effectué';
        }
    };

    // Fonction pour déterminer la couleur associée aux 3 types de séjour
    const getStatusColor = (entranceDate, dischargeDate) => {
        const status = getStayStatus(entranceDate, dischargeDate);
        
        switch (status) {
        case 'à venir':
            return 'future'; // Couleur pour les séjours à venir
        case 'en cours':
            return 'inprogress'; // Couleur pour les séjours en cours
        case 'effectué':
            return 'perform'; // Couleur pour les séjours passés
        default:
            return 'black';
        }
    };

    // Fonction pour formater et afficher les dates des séjours
    const displayDate = (dateString) => {    
        const date = new Date(dateString);    
        const formatDate = format(date, "dd MMMM yyyy", { locale: fr });    
        return formatDate;
    };

    // Rendu du composant
    return (
        <>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <section className="profile flux">
            <h2 className="profile__title">Historique des séjours</h2>
            <ul className="profile__items">
            {stays !== undefined ? (
                stays && stays.length > 0 ? (
                    stays.map((stay) => (
                        <li className={`profile__item ${getStatusColor(stay.entranceDate, stay.dischargeDate)}`} key={stay.id}>
                            <h3>Séjour {getStayStatus(stay.entranceDate, stay.dischargeDate)}</h3>
                            <p>Admission le : {displayDate(stay.entranceDate)}</p>
                            <p>Sortie le : {displayDate(stay.dischargeDate)}</p>
                            <p>Raison du séjour : {stay.reason}</p>
                        </li>
                    ))
                ) : (
                    <p>Aucun séjour</p>
                )
            ) : (
                <p>Chargement des données...</p>
            )}
            </ul>
        </section>
        </>
    );
}

// Exportation du composant Profile en tant que composant par défaut
export default Profile;
