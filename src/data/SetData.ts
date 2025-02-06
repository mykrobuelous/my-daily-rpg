import { generateID } from '@/utils/function/generateID';
import { mockQuestTemplateData } from './QuestTemplateData';
import { SetType } from '@/types/datatypes/set.types';

export const mockSetsData: SetType[] = [
    {
        id: generateID(),
        name: 'Morning Gym Session',
        setItems: [
            {
                id: generateID(),
                questID: mockQuestTemplateData[0].id,
                level: 'MIN',
            },
            {
                id: generateID(),
                questID: mockQuestTemplateData[2].id,
                level: 'MID',
            },
            {
                id: generateID(),
                questID: mockQuestTemplateData[4].id,
                level: 'MAX',
            },
        ],
    },
    {
        id: generateID(),
        name: 'Evening Gym Session',
        setItems: [
            {
                id: generateID(),
                questID: mockQuestTemplateData[1].id,
                level: 'MIN',
            },
            {
                id: generateID(),
                questID: mockQuestTemplateData[3].id,
                level: 'MAX',
            },
        ],
    },
];
