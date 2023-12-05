/* Login Form : authentification des users */
import React from 'react';
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

import axios from 'axios';

import '../css/stay.css';
import backArrow from '../assets/icon/back-arrow.svg';

import StayStep1 from './StayStep1';
import StayStep2 from './StayStep2';
import StayStep3 from './StayStep3';
import StayStep4 from './StayStep4';
import StayStep5 from './StayStep5';
import StayStep6 from './StayStep6';


function StayForm() {  

  // lifting state up
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    step1: '',
    step2: '',
    step3: '',
    step4: '',
    step5: '',
  }); 
  const [updated, setUpdated] = useState(false); 
  
  const handleStepChange = (index) => {
    setCurrentStep(currentStep + index);
  };

  const handleInputChange = (step, value) => {
    if (step === "step5" && value === "confirmed"){ // fin du formulaire
      // Supprime le localStorage et réinitialise formData
      localStorage.removeItem('formData');
      setFormData({
        step1: '',
        step2: '',
        step3: '',
        step4: '',
        step5: '',
      });
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [step]: value,
      }));
      setUpdated(true); // pour le localstorage
    }
    handleStepChange(1); // cureentStep +1      
  };

  // au montage du composant, on cherche si formData existe
  useEffect(() => {    
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {    
      console.log("localstorage trouvé");
      setFormData(prevData => {
        const updatedData = JSON.parse(storedFormData);
  
        // Trouve le premier "step" vide et mettre à jour currentStep
        const firstEmptyStep = Object.entries(updatedData).find(([step, value]) => !value);
  
        if (firstEmptyStep) {
          setCurrentStep(Number(firstEmptyStep[0].replace('step', '')));
          console.log("Currentstep : "+ Number(firstEmptyStep[0].replace('step', '')));
        }
  
        return updatedData;
      });
      /*
      setFormData(JSON.parse(storedFormData));

      // Trouve le premier "step" vide et mettre à jour currentStep
      console.log(formData);
      const firstEmptyStep = Object.entries(formData).find(([step, value]) => !value);
      console.log("First empty : " + firstEmptyStep);

      if (firstEmptyStep) {
        setCurrentStep(Number(firstEmptyStep[0].replace('step', '')));
        console.log("Currentstep : "+ Number(firstEmptyStep[0].replace('step', '')));
      }*/
    }
  }, []);

  // Stockage de formData lors du changement de updated
  useEffect(() => {
    if (updated) {
      // Stockage de formData dans localStorage
      console.log("localstorage called");
      localStorage.setItem('formData', JSON.stringify(formData));
      setUpdated(false);
    }
  }, [updated]);

  // current Step component

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
          formData={formData.step2}
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
          formData={formData.step4}
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


  return (
    <section className="stay flux">
      <h2 className="stay__title">Plannifiez votre séjour</h2>
      <div className="stay__card">
        <div className="stay__card-header">
          {currentStep > 1 ? (<button className="stay__nav-button" onClick={() => handleStepChange(-1)}><img src={backArrow}alt="bouton de retour"/></button>) : (<button></button>)}
          <h3 className="stay__card-title">Votre séjour</h3>
          <button className="stay__nav-button"></button>
        </div>
        <div className="stay__card-content">
          {currentStepComponent}          
        </div>
      </div>
    </section>      
  );
}

export default StayForm;