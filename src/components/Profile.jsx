/* Profile : personal data */
import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

import '../css/profile.css';

function Profile() {
    // Auth context
    const { token } = useAuth();
    // Stock la réponse à getStays
    const [stays, setStays] = useState(null);

    const [error, setError] = useState(null);
    
    // Appel des data
    useEffect(() => {    
        const getStays = async () => {
            try {                    
                    const response = await axios.get('http://127.0.0.1:8000/api/stays', {
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

    // Extraction du cookie
    const getCookie = (name) => {
        const cookieValue = document.cookie
        .split('; ')
        .find((row) => row.startsWith(name))
        ?.split('=')[1];
        return cookieValue;
    };

    // Type de séjour(A venir, en cours et effectué)
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

    // Couleurs associées aux 3 types de séjour
    const getStatusColor = (entranceDate, dischargeDate) => {
        const status = getStayStatus(entranceDate, dischargeDate);
        
        switch (status) {
        case 'à venir':
            return 'green'; // Couleur pour les séjours à venir
        case 'en cours':
            return 'blue'; // Couleur pour les séjours en cours
        case 'effectué':
            return 'gray'; // Couleur pour les séjours passés
        default:
            return 'black';
        }
    };

    return (
        <>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <section className="profile flux">
            <h2 className="profile__title">Historque des séjours</h2>
            <ul className="profile__items"></ul>
            {stays !== undefined ? (
                stays && stays.length > 0 ? (
                    stays.map((stay) => (
                        <li key={stay.id} style={{ color: getStatusColor(stay.entranceDate, stay.dischargeDate) }}>
                            <p>Séjour {getStayStatus(stay.entranceDate, stay.dischargeDate)}</p>
                            <p>Admission le : {stay.entranceDate}</p>
                            <p>Sortie le : {stay.dischargeDate}</p>
                            <p>Raison du séjour : {stay.reason}</p>
                        </li>
                    ))
                ) : (
                    <p>Aucun séjour</p>
                )
            ) : (
                <p>Chargement des données...</p>
            )}
        </section>
        </>
    );
}

export default Profile;