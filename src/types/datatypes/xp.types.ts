import { IDBrand } from '../brand.types';

export type XPLevelDataType = 'MIN' | 'MID' | 'MAX';

export type XPType = {
    id: IDBrand;
    experienceID: IDBrand;
    datetimeCreated: string;
    questDetails: QuestDetailsType;
};

export type QuestDetailsType = {
    quest: string;
    points: number;
    level: XPLevelDataType;
};
