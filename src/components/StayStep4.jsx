/* STAY Step 4 : choix des dates */
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';
import fr from 'date-fns/locale/fr';
import chevronRight from '../assets/icon/chevron-right.svg';

import 'react-datepicker/dist/react-datepicker.css';
import '../css/override_datepicker.css';



function StayStep4({ formData, onInputChange }) {

    const tomorrow = addDays(new Date(), 1);

    const [startDate, setStartDate] = useState(tomorrow);
    const [endDate, setEndDate] = useState(null);    

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    }; 
    
    const handleNextClick = () => {
        const range = `${startDate},${endDate}`;
        onInputChange(range);
    };

    return (
        <>
            <h4 className="stay__card-subtitle">Choisissez les jours d'admission et de sortie</h4>
            <DatePicker
                selected={startDate}
                onChange={onChange}
                minDate={tomorrow}
                startDate={startDate}
                endDate={endDate}
                excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
                selectsRange
                selectsDisabledDaysInRange
                inline
                locale={fr}
            />
            <div className="stay__footer">
                <button className="min-button button-green stay__button" onClick={handleNextClick}><span>Suivant</span><img src={chevronRight} alt="chevron vers la droite"/></button>
            </div>
        </>
    );
};

export default StayStep4;