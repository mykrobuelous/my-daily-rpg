import { IDBrand } from '@/types/brand.types';
import { QuestTemplateType } from '@/types/datatypes/quest.types';
import { generateID } from '@/utils/function/generateID';
import { useState } from 'react';

const useTestQuestTemplates = (questTemplateData: QuestTemplateType[]) => {
    const [testQuestTemplateData, setTestQuestTemplateData] =
        useState<QuestTemplateType[]>(questTemplateData);

    const addQuestTemplate = () => {
        setTestQuestTemplateData((prevData) => {
            const newData: QuestTemplateType = {
                id: generateID(),
                title: 'Test New Quest',
                description: 'This is a test to add new quest',
                experienceID: 'ABC01' as IDBrand,
                questDetails: {
                    min: {
                        points: 10,
                        quest: '1 min test',
                    },
                    mid: {
                        points: 20,
                        quest: '2 min test',
                    },
                    max: {
                        points: 30,
                        quest: '3 min test',
                    },
                },
            };
            return [...prevData, newData];
        });
    };

    const deleteQuestTemplate = (id: IDBrand) => {
        setTestQuestTemplateData((prevData) => {
            return prevData.filter((data) => data.id !== id);
        });
    };

    return {
        questTemplateData: testQuestTemplateData,
        setQuestTemplateData: setTestQuestTemplateData,
        questFunctions: {
            add: addQuestTemplate,
            delete: deleteQuestTemplate,
        },
    };
};
export default useTestQuestTemplates;
