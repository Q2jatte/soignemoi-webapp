/* STAY Step 5 : Confirmation du séjour */
import React, { useState } from "react";
import axios from 'axios';
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import fr from "date-fns/locale/fr";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

// URL de l'API
const apiUrl = import.meta.env.VITE_API_ROOT_URL;

// Composant StayStep5
function StayStep5({ formData, onInputChange }) {

  // Context d'authentification
  const { isAuthenticated, token } = useAuth();

  const [message, setMessage] = useState(false);
  // compteur
  const [remainingTime, setRemainingTime] = useState(10);
  const startCountdown = () => {
    for (let i = 10; i >= 0; i--) {
      setTimeout(() => {
        if (i === 0) {
          // Rediriger vers la page de connexion après 10 secondes
          navigateTo("/login");
        } else {
          setRemainingTime(i)
        }
      }, (10 - i) * 1000);
    }
  };

  const [error, setError] = useState(null);
  const navigateTo = useNavigate();

  const handleNextClick = () => {
    if (isAuthenticated) {
      registerStay();      
    } else {
      setMessage(true);
      startCountdown();
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

        const response = await axios.post(`${apiUrl}/stay`, stayData, {
            headers: {
                'Authorization': `Bearer ${token.token}`                       
            },                        
        });                      
        onInputChange("confirmed");
        console.log("Enregistrement sur l'API réussi");        
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
      {/* Affichage du titre de l'étape */}
      <h4 className="stay__card-subtitle">Confirmez votre séjour</h4>

      {/* Affichage des détails du séjour */}
      <ul className="stay__recap">
        <li>Spécialité : {formData.step1[1]}</li>
        <li>Votre praticien : {formData.step2[1]}</li>
        <li>Motif : {formData.step3}</li>
        <li>Date du séjour : du {displayDate(formData.step4[0])} au {displayDate(formData.step4[1])}</li>
      </ul>

      {/* Pied de la carte avec le bouton de confirmation */}
      <div className="stay__footer">
        <button className="min-button button-orange" onClick={handleNextClick}>
          Confirmer
        </button>
      </div>

      {/* Affichage des erreurs s'il y en a */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Affichage du message de redirection vers la page de connexion */}
      {message ? (
        <p className="stay__message">
          Pour confirmer votre séjour, vous devez être connecté. 🔄 Redirection vers
          la page de connexion dans {remainingTime} secondes.
        </p>
      ) : (
        ""
      )}
    </>
  );
}

// Exportation du composant StayStep5
export default StayStep5;
