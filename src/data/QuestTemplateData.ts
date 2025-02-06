// Available experience IDs

import { IDBrand } from '@/types/brand.types';
import { QuestTemplateType } from '@/types/datatypes/quest.types';
import { generateID } from '@/utils/function/generateID';

// Mock Quest Template Data
export const mockQuestTemplateData: QuestTemplateType[] = [
    {
        id: generateID(),
        experienceID: 'ABC01' as IDBrand,
        title: 'Exercise',
        description: 'Exercise on the treadmill. Search',
        questDetails: {
            min: { quest: '1 min', points: 10 },
            mid: { quest: '5 min', points: 20 },
            max: { quest: '3 min', points: 30 },
        },
    },
    {
        id: generateID(),
        experienceID: 'ABC02' as IDBrand,
        title: 'Meditation Session',
        description: 'Relax and improve focus through meditation. Search',
        questDetails: {
            min: { quest: '5 min', points: 5 },
            mid: { quest: '15 min', points: 15 },
            max: { quest: '30 min', points: 25 },
        },
    },
    {
        id: generateID(),
        experienceID: 'ABC01' as IDBrand,
        title: 'Weight Lifting',
        description: 'Strengthen your muscles through weight lifting. Search 2',
        questDetails: {
            min: { quest: 'Light dumbbell workout', points: 15 },
            mid: { quest: 'Medium-intensity weightlifting', points: 30 },
            max: { quest: 'Heavy lifting with compound exercises', points: 50 },
        },
    },
    {
        id: generateID(),
        experienceID: 'ABC04' as IDBrand,
        title: 'Jogging',
        description: 'Boost endurance and stamina by jogging.',
        questDetails: {
            min: { quest: '5 min', points: 10 },
            mid: { quest: '20 min', points: 25 },
            max: { quest: '45 min', points: 40 },
        },
    },
    {
        id: generateID(),
        experienceID: 'ABC03' as IDBrand,
        title: 'Yoga Session',
        description: 'Improve flexibility and reduce stress through yoga.',
        questDetails: {
            min: { quest: '5-minute stretching', points: 8 },
            mid: { quest: '20-minute yoga flow', points: 18 },
            max: { quest: '45-minute advanced session', points: 35 },
        },
    },
];
