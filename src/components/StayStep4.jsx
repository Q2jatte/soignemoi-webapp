/* STAY Step 4 : Choix des dates */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import { addDays, parseISO } from 'date-fns';
import fr from 'date-fns/locale/fr';
import chevronRight from '../assets/icon/chevron-right.svg';

import 'react-datepicker/dist/react-datepicker.css';
import '../css/override_datepicker.css';

// Composant StayStep4
function StayStep4({ formData, onInputChange }) {

    // Calcul de la date de demain
    const tomorrow = addDays(new Date(), 1);

    // States pour les dates de début et de fin
    const [startDate, setStartDate] = useState(tomorrow);
    const [endDate, setEndDate] = useState(null);

    // State pour stocker les dates non sélectionnables
    const [excludeDate, setExcludeDate] = useState(null);

    // State pour gérer les erreurs
    const [error, setError] = useState(null);

    // Récupération des dates non sélectionnables depuis l'API
    useEffect(() => {    
        const getExcludeDate = async () => {
            try {                    
                const response = await axios.get(`http://127.0.0.1:8000/api/stays/doctor/${formData.step2[0]}`);                    
                const data = response.data;
                // Convertir les dates JSON en objets Date
                const excludeDates = data.map(date => parseISO(date));         
                setExcludeDate(excludeDates);
                
            } catch (error) {                
                setError("Erreur lors de la récupération des dates"); 
                console.log(error);                   
            }
        };
        getExcludeDate();
    }, []);        

    // Fonction pour mettre à jour les dates de début et de fin lors de la sélection
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    }; 
    
    // Fonction pour passer à l'étape suivante et transmettre les dates sélectionnées
    const handleNextClick = () => {
        onInputChange([startDate, endDate]);
    };

    return (
        <>
            {/* Affichage du titre de l'étape */}
            <h4 className="stay__card-subtitle">Choisissez les jours d'admission et de sortie</h4>

            {/* Affichage des erreurs s'il y en a */}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* Affichage du sélecteur de dates */}
            {excludeDate != null ? (
                <DatePicker
                    selected={startDate}
                    onChange={onChange}
                    minDate={tomorrow}
                    startDate={startDate}
                    endDate={endDate}
                    excludeDates={excludeDate}
                    selectsRange
                    selectsDisabledDaysInRange
                    inline
                    locale={fr}
                />
            ) : (
                <p>Chargement des données...</p>
            )}

            {/* Pied de la carte avec le bouton pour passer à l'étape suivante */}
            <div className="stay__footer">
                <button className="min-button button-green stay__button" onClick={handleNextClick}>
                    <span>Suivant</span>
                    <img src={chevronRight} alt="chevron vers la droite"/>
                </button>
            </div>
        </>
    );
}

// Exportation du composant StayStep4
export default StayStep4;
