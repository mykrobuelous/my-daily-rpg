import { IDBrand } from '../brand.types';

export type ExpColorType = {
    text: string;
    background: string;
    border: string;
    xp?: string;
    gradient?: string;
};

export type ExperienceType = {
    id: IDBrand;
    experience: string;
    ABV: string;
    color: ExpColorType;
    description: string;
    guideQuestion: string;
};
