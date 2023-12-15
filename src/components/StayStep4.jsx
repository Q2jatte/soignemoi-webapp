/* STAY Step 4 : choix des dates */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import { addDays, parseISO } from 'date-fns';
import fr from 'date-fns/locale/fr';
import chevronRight from '../assets/icon/chevron-right.svg';

import 'react-datepicker/dist/react-datepicker.css';
import '../css/override_datepicker.css';



function StayStep4({ formData, onInputChange }) {

    const tomorrow = addDays(new Date(), 1);

    const [startDate, setStartDate] = useState(tomorrow);
    const [endDate, setEndDate] = useState(null);
    
    // Stockage des dates non sélectionnables
    const [excludeDate, setExcludeDate] = useState(null);

    const [error, setError] = useState(null);

    // Récupération des services
    useEffect(() => {    
        const getExcludeDate = async () => {
            try {                    
                const response = await axios.get(`http://127.0.0.1:8000/api/stays/doctor/${formData.step2[0]}`);                    
                const data = response.data;
                console.log("response :", response.data);
                // Convertir les dates JSON en objets Date
                const excludeDates = data.map(date => parseISO(date));         
                setExcludeDate(excludeDates);
                
            } catch (error) {                
                setError("Erreur lors de la recupération des dates"); 
                console.log(error);                   
            }
        };
        getExcludeDate();
    }, []);        

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    }; 
    
    const handleNextClick = () => {
        //const range = `${startDate},${endDate}`;
        //onInputChange(range);
        onInputChange([startDate, endDate]);
    };

    return (
        <>
            <h4 className="stay__card-subtitle">Choisissez les jours d'admission et de sortie</h4>
            {error && <p style={{ color: 'red' }}>{error}</p>}
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
            <div className="stay__footer">
                <button className="min-button button-green stay__button" onClick={handleNextClick}><span>Suivant</span><img src={chevronRight} alt="chevron vers la droite"/></button>
            </div>
        </>
    );
};

export default StayStep4;