import { mockQuestTemplateData } from '@/data/QuestTemplateData';
import { useGetDayDataQuery } from '../api/rtkAPI/dayAPI';
import { useGetExperienceDataQuery } from '../api/rtkAPI/experienceAPI';
import { mockSetsData } from '@/data/SetData';

const useData = () => {
    const dayDataState = useGetDayDataQuery();
    const experienceDataState = useGetExperienceDataQuery();
    const questTemplateDataState = mockQuestTemplateData;
    const setDataState = mockSetsData;

    return {
        dayDataState,
        experienceDataState,
        questTemplateDataState: {
            data: questTemplateDataState,
        },
        setDataState: {
            data: setDataState,
        },
    };
};

export default useData;
