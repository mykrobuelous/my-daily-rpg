import { useMemo, useState } from 'react';
import { mockExperienceData } from '../data/ExperienceData';
import { createLookup } from '../utils/function/createLookup';
import useMockAPI from '../api/mockAPI/useMockAPI';

const useData = () => {
    const { data, callAPI } = useMockAPI();
    const [experienceData] = useState(mockExperienceData);
    const experienceDataMap = useMemo(() => {
        return createLookup(experienceData, 'id');
    }, [experienceData]);

    return { dayData: data.habitData, experienceData, experienceDataMap, callAPI };
};

export default useData;
