import { generateID } from '../utils/function/generateID';
import { DayType } from './DayType';

export const mockDayData: DayType[] = [
    {
        id: generateID(),
        date: '01.23.2024',
    },
    {
        id: generateID(),
        date: '01.24.2024',
    },
    {
        id: generateID(),
        date: '01.25.2024',
    },
    {
        id: generateID(),
        date: '01.26.2024',
    },
    {
        id: generateID(),
        date: '01.27.2024',
    },
];
