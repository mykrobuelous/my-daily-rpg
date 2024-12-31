import { useGetDayDataQuery } from '../api/rtkAPI/dayAPI';
import { useGetExperienceDataQuery } from '../api/rtkAPI/experienceAPI';
import useLevel from './useLevel';

const useData = () => {
    const dayDataState = useGetDayDataQuery();
    const experienceDataState = useGetExperienceDataQuery();
    const { levelData } = useLevel(dayDataState.data);

    return { dayDataState, experienceDataState, levelData };
};

export default useData;
