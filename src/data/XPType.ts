import { IDBrand } from '../utils/types/BrandType';

export type XPType = {
    id: IDBrand;
    experienceID: IDBrand;
    questDetails: {
        quest: string;
        points: number;
    };
};
