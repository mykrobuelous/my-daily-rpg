import { useGetDayDataQuery } from '../api/rtkAPI/dayAPI';
import { useGetExperienceDataQuery } from '../api/rtkAPI/experienceAPI';

const useData = () => {
    const dayDataState = useGetDayDataQuery();
    const experienceDataState = useGetExperienceDataQuery();

    return { dayDataState, experienceDataState };
};

export default useData;
