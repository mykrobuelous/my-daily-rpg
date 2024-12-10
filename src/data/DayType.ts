import { IDBrand } from '../utils/types/BrandType';
import { XPType } from './XPType';

export type DayType = {
    id: IDBrand;
    date: string;
    QuestXP: XPType[];
};
