import useData from '@/hooks/useData';
import useDebounceSearch from '@/hooks/useDebounceSearch';
import useFuzzySearch from '@/hooks/useFuzzySearch';
import { IDBrand } from '@/types/brand.types';
import { QuestTemplateType } from '@/types/datatypes/quest.types';
import { useMemo, useState } from 'react';

const useSearchQuestTemplates = (questData: QuestTemplateType[]) => {
    const { experienceDataState } = useData();
    const [questFilter, setQuestFilter] = useState<IDBrand | 'ALL'>('ALL');
    const [searchText, setSearchText] = useState<string>('');
    const [isGrouped, setIsGrouped] = useState<boolean>(false);

    const isExp = !!experienceDataState.data?.some((expItem) => expItem.id === questFilter);

    const dbouncedSearchText = useDebounceSearch(searchText, 300);

    const filteredQuestTemplatesData = useMemo(() => {
        const returnData = questData.filter((questItem) => questItem.experienceID === questFilter);
        return isExp ? returnData : questData;
    }, [questData, questFilter, isExp]);

    const searchQuestTemplateData = useFuzzySearch(filteredQuestTemplatesData, dbouncedSearchText, [
        'title',
        'description',
    ]);

    const sortedQuestTemplateData = useMemo(() => {
        return isGrouped
            ? [...searchQuestTemplateData].sort((a, b) => {
                  if (a.experienceID < b.experienceID) return -1;
                  if (a.experienceID > b.experienceID) return 1;
                  return 0;
              })
            : searchQuestTemplateData.slice().reverse();
    }, [searchQuestTemplateData, isGrouped]);

    return {
        questFilter: {
            get: questFilter,
            set: setQuestFilter,
        },
        searchText: {
            get: searchText,
            set: setSearchText,
        },
        filteredData: sortedQuestTemplateData,
        isExp,
        isGrouped: {
            get: isGrouped,
            set: setIsGrouped,
        },
    };
};

export default useSearchQuestTemplates;
