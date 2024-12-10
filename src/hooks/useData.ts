import { useState } from 'react';
import { mockDayData } from '../data/DayData';

const useData = () => {
    const [dayData] = useState(mockDayData);

    return { dayData };
};

export default useData;
