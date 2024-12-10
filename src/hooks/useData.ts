import { useState } from 'react';
import { mockDayData } from '../data/DayData';
import { mockExperienceData } from '../data/ExperienceData';

const useData = () => {
    const [dayData] = useState(mockDayData);
    const [experienceData] = useState(mockExperienceData);

    return { dayData, experienceData };
};

export default useData;
