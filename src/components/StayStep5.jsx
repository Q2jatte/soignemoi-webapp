/* STAY Step 5 : confirmation du séjour*/
import React, { useState } from "react";
import axios from 'axios';
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import fr from "date-fns/locale/fr";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function StayStep5({ formData, onInputChange }) {

  // Context d'authentification
  const { isAuthenticated, token } = useAuth();

  const [message, setMessage] = useState(false);
  const [error, setError] = useState(null);
  const navigateTo = useNavigate();

  const handleNextClick = () => {
    if (isAuthenticated) {
      registerStay();      
    } else {
      setMessage(true);
      setTimeout(() => {
        // Rediriger vers la page de connexion après 10 secondes
        navigateTo("/login");
      }, 10_000);
    }
  };

  const registerStay = async () => {
    try {
        const stayData = {
            entranceDate: formData.step4[0],
            dischargeDate: formData.step4[1],
            reason: formData.step3,            
            doctor: parseInt(formData.step2[0]),            
        };

        const response = await axios.post('http://127.0.0.1:8000/api/stay', stayData, {
            headers: {
                'Authorization': `Bearer ${token.token}`                       
            },                        
        });                      
        onInputChange("confirmed");
        console.log("enregistrement sur l'API");        
    } catch (error) {                
        setError("Erreur lors de l'enregistrement du séjour");
        console.log(error);                    
    }
    
  };

  // formatage et affichage des dates du séjour
  const displayDate = (dateString) => {    
    const date = new Date(dateString);    
    const formatDate = format(date, "dd MMMM yyyy", { locale: fr });    
    return formatDate;
  };

  return (
    <>
      <h4 className="stay__card-subtitle">Confirmez votre séjour</h4>
      <ul className="stay__recap">
        <li>Spécialité : {formData.step1[1]}</li>
        <li>Votre praticien : {formData.step2[1]}</li>
        <li>Motif : {formData.step3}</li>
        <li>Date du séjour : du {displayDate(formData.step4[0])} au {displayDate(formData.step4[1])}</li>
      </ul>
      <div className="stay__footer">
        <button className="min-button button-orange" onClick={handleNextClick}>
          Confirmer
        </button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message ? (
        <p className="stay__message">
          Pour confirmer votre séjour vous devez être connecté. 🔄 Redirection vers
          la page de connexion dans 10 secondes.
        </p>
      ) : (
        ""
      )}
    </>
  );
}

export default StayStep5;
