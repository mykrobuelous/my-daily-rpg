import { generateID } from '../utils/function/generateID';
import { IDBrand } from '../utils/types/BrandType';
import { DayType } from './DayType';

export const mockDayData: DayType[] = [
    {
        id: generateID(),
        date: '01.23.2024',
        QuestXP: [
            {
                id: generateID(),
                experienceID: 'ABC02' as IDBrand,
                datetimeCreated: new Date().toISOString(),
                questDetails: {
                    quest: 'Meditate for 15 minutes',
                    points: 10,
                    level: 'MAX',
                },
            },
            {
                id: generateID(),
                experienceID: 'ABC03' as IDBrand,
                datetimeCreated: new Date().toISOString(),
                questDetails: {
                    quest: 'Exercise for 5 minutes',
                    points: 20,
                    level: 'MID',
                },
            },
            {
                id: generateID(),
                experienceID: 'ABC01' as IDBrand,
                datetimeCreated: new Date().toISOString(),
                questDetails: {
                    quest: 'Read a book for 30 minutes',
                    points: 1,
                    level: 'MAX',
                },
            },
            {
                id: generateID(),
                experienceID: 'ABC04' as IDBrand,
                datetimeCreated: new Date().toISOString(),
                questDetails: {
                    quest: 'Write in a journal for 20 minutes',
                    points: 40,
                    level: 'MIN',
                },
            },
            {
                id: generateID(),
                experienceID: 'ABC02' as IDBrand,
                datetimeCreated: new Date().toISOString(),
                questDetails: {
                    quest: 'Practice a hobby for 1 hour',
                    points: 50,
                    level: 'MAX',
                },
            },
        ],
    },
    {
        id: generateID(),
        date: '01.24.2024',
        QuestXP: [],
    },
    {
        id: generateID(),
        date: '01.25.2024',
        QuestXP: [],
    },
    {
        id: generateID(),
        date: '01.26.2024',
        QuestXP: [],
    },
    {
        id: generateID(),
        date: '01.27.2024',
        QuestXP: [],
    },
];
