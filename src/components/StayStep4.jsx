/* STAY Step 4 : choix des dates */
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import fr from 'date-fns/locale/fr';



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
            <h2>Choisissez les jours d'admission et de sortie</h2>
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
            <button onClick={handleNextClick}>Suivant</button>
        </>
    );
};

export default StayStep4;