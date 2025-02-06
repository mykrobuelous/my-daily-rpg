// export type XPLevelDataType = 'MIN' | 'MID' | 'MAX';

import { IDBrand } from '../brand.types';
import { QuestDetailsType } from './xp.types';

export type QuestTemplateType = {
    id: IDBrand;
    experienceID: IDBrand;
    questTitle: string;
    questDescription: string;
    questDetails: {
        min: Omit<QuestDetailsType, 'level'>;
        mid: Omit<QuestDetailsType, 'level'>;
        max: Omit<QuestDetailsType, 'level'>;
    };
};
