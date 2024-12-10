import { IDBrand } from '../utils/types/BrandType';
import { LevelDataType } from './XPData';

export type XPType = {
    id: IDBrand;
    experienceID: IDBrand;
    datetimeCreated: string;
    questDetails: {
        quest: string;
        points: number;
        level: LevelDataType;
    };
};
