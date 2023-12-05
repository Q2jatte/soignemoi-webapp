/* Login Form : authentification des users */
import React from 'react';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

import axios from 'axios';
import '../css/loginSignUpForm.css';
import StayStep1 from './StayStep1';
import StayStep2 from './StayStep2';
import StayStep3 from './StayStep3';
import StayStep4 from './StayStep4';
import StayStep5 from './StayStep5';


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
  
  const handleStepChange = (index) => {
    setCurrentStep(currentStep + index);
  };

  const handleInputChange = (step, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [step]: value,
    }), () => {

      // Stockage de formData
      localStorage.setItem('formData', JSON.stringify(formData));
    });    

    console.log(formData);
    handleStepChange(1);   
  };

  // current Step companent

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
    default:
      currentStepComponent = null;
  }


  return (
    <section className="stay">
      <h2 className="stay__title">Plannifiez votre séjour</h2>
      <div className="stay__card">
        <div className="stay__card-header">
          {currentStep > 1 ? (<button onClick={() => handleStepChange(-1)}>Retour</button>) : (<button></button>)}
          <span className="stay__card-title">Votre séjour</span>
          <button></button>
        </div>
        <div className="stay__card-content">
          {currentStepComponent}          
        </div>
      </div>
    </section>      
  );
}

export default StayForm;