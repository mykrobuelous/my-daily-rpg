import { IDBrand } from '../utils/types/BrandType';

export type ExperienceType = {
    id: IDBrand;
    experience: string;
    ABV: string;
    color: `#${string}`;
    description: string;
    guideQuestion: string;
};
