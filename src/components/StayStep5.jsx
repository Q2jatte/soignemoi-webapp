/* STAY Step 5 : confirmation du séjour*/
import React, { useState } from 'react';
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import fr from 'date-fns/locale/fr';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';



function StayStep5({ formData, onInputChange }) {    

    // Context d'authentification
    const { isAuthenticated } = useAuth();
    const [message, setMessage] = useState(false);
    const navigateTo = useNavigate();

    const handleNextClick = () => {        
       if (isAuthenticated) {
        console.log("enregistrement sur l'API");
       } else {
            setMessage(true);  
            setTimeout(() => {
            // Rediriger vers la page de connexion après 10 secondes
            navigateTo('/login');
            }, 10_000);      
       }
        
    };

    // formatage et affichage des dates du séjour
    const displayDates = (datesString) => {
        const dates = datesString.split(',');
        const date1 = new Date(dates[0]);
        const date2 = new Date(dates[1]);
        const formatDate1 = format(date1, 'dd MMMM yyyy', { locale: fr});
        const formatDate2 = format(date2, 'dd MMMM yyyy', { locale: fr});
        return "du " + formatDate1 + " au " + formatDate2;
    }

    return (
        <>
            <h2>Confirmez votre séjour</h2>
            <ul>
                <li>Spécialité : {formData.step1}</li>
                <li>Votre praticien : {formData.step2}</li>
                <li>Motif : {formData.step3}</li>
                <li>Date du séjour : {displayDates(formData.step4)}</li>
            </ul>
            
            <button className="min-button button-orange" onClick={handleNextClick}>Confirmer</button>
            {message ? <p>Pour confirmer votre séjour vous devez etre connecté. Redirection vers la page de login dans 10s</p> : ''}            
        </>
    );
};

export default StayStep5;