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
        onInputChange("confirmed");
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
            <h4 className="stay__card-subtitle">Confirmez votre séjour</h4>
            <ul className="stay__recap">
                <li>Spécialité : {formData.step1}</li>
                <li>Votre praticien : {formData.step2}</li>
                <li>Motif : {formData.step3}</li>
                <li>Date du séjour : {displayDates(formData.step4)}</li>
            </ul>
            <div className="stay__footer">
                <button className="min-button button-orange" onClick={handleNextClick}>Confirmer</button>
            </div>
            {message ? <p className="stay__message">Pour confirmer votre séjour vous devez être connecté. Redirection vers la page de connexion dans 10 secondes.</p> : ''}            
        </>
    );
};

export default StayStep5;