import { IDBrand } from '../brand.types';
import { ExperienceType } from './experience.types';
import { XPType } from './xp.types';

export type DayType = {
    id: IDBrand;
    date: string;
    QuestXP: XPType[];
};

export type DayUpdateType = Partial<DayType> | Partial<ExperienceType>;
