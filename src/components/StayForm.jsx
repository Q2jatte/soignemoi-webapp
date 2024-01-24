/* Stay Form : Formulaire de planification de séjour */
import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';
import '../css/stay.css';
import backArrow from '../assets/icon/back-arrow.svg';

// Importation des composants pour chaque étape du séjour
import StayStep1 from './StayStep1';
import StayStep2 from './StayStep2';
import StayStep3 from './StayStep3';
import StayStep4 from './StayStep4';
import StayStep5 from './StayStep5';
import StayStep6 from './StayStep6';

// Fonction principale du composant StayForm
function StayForm() {  
  // State pour suivre l'étape actuelle
  const [currentStep, setCurrentStep] = useState(1);

  // State pour stocker les données du formulaire
  const [formData, setFormData] = useState({
    step1: '',
    step2: '',
    step3: '',
    step4: '',
    step5: '',
  }); 

  // State pour indiquer si les données du formulaire ont été mises à jour
  const [updated, setUpdated] = useState(false); 

  // Fonction pour changer l'étape actuelle
  const handleStepChange = (index) => {
    setCurrentStep(currentStep + index);    
  };

  // Fonction pour gérer le changement de données du formulaire
  const handleInputChange = (step, value) => {
    // Si la cinquième étape est "confirmed", réinitialise le formulaire
    if (step === "step5" && value === "confirmed"){ 
      localStorage.removeItem('formData');
      setFormData({
        step1: '',
        step2: '',
        step3: '',
        step4: '',
        step5: '',
      });
    } else {
      // Met à jour les données du formulaire et indique qu'elles ont été modifiées
      setFormData((prevData) => ({
        ...prevData,
        [step]: value,
      }));      
      setUpdated(true);
    }
    // Passe à l'étape suivante
    handleStepChange(1);   
  };

  // Effet au montage pour charger les données du formulaire depuis le localStorage
  useEffect(() => {    
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {      
      setFormData(prevData => {
        const updatedData = JSON.parse(storedFormData);
  
        // Trouve le premier "step" vide et mettre à jour currentStep
        const firstEmptyStep = Object.entries(updatedData).find(([step, value]) => !value);
  
        if (firstEmptyStep) {
          setCurrentStep(Number(firstEmptyStep[0].replace('step', '')));          
        }
  
        return updatedData;
      });      
    }
  }, []);

  // Effet pour stocker les données du formulaire dans le localStorage lorsqu'elles sont mises à jour
  useEffect(() => {
    if (updated) {
      localStorage.setItem('formData', JSON.stringify(formData));
      setUpdated(false);
    }
  }, [updated]);

  // Composant de l'étape actuelle en fonction de la valeur de currentStep
  let currentStepComponent;
  switch (currentStep) {
    case 1:
      currentStepComponent = (
        <StayStep1
          formData={formData.step1}
          onInputChange={(value) => handleInputChange('step1', value)}
        />
      );
      break;
    case 2:
      currentStepComponent = (
        <StayStep2
          formData={formData}
          onInputChange={(value) => handleInputChange('step2', value)}
        />
      );
      break;
    case 3:
      currentStepComponent = (
        <StayStep3
          formData={formData.step3}
          onInputChange={(value) => handleInputChange('step3', value)}
        />
      );
      break;
    case 4:
      currentStepComponent = (
        <StayStep4
          formData={formData}
          onInputChange={(value) => handleInputChange('step4', value)}
        />
      );
      break;
    case 5:
      currentStepComponent = (
        <StayStep5
          formData={formData}
          onInputChange={(value) => handleInputChange('step5', value)}
        />
      );
      break;
    case 6:
      currentStepComponent = (
        <StayStep6 />
      );
      break;
    default:
      currentStepComponent = null;
  }

  // Rendu du composant
  return (
    <section className="stay flux">
      <h2 className="stay__title">Planifiez votre séjour</h2>
      <div className="stay__card">
        <div className="stay__card-header">
          {/* Affiche un bouton de retour si l'étape actuelle est entre 2 et 4 */}
          {currentStep > 1 && currentStep < 5 ? (
            <button className="stay__nav-button" onClick={() => handleStepChange(-1)}>
              <img src={backArrow} alt="bouton de retour"/>
            </button>
          ) : (
            <button></button>
          )}
          <h3 className="stay__card-title">Votre séjour</h3>
          <button className="stay__nav-button"></button>
        </div>
        <div className="stay__card-content">
          {/* Affiche le composant de l'étape actuelle */}
          {currentStepComponent}          
        </div>
      </div>
    </section>      
  );
}

// Exportation du composant StayForm en tant que composant par défaut
export default StayForm;
