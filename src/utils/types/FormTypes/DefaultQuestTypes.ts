import { z } from 'zod';
import { IDBrand } from '../BrandType';

export type DefaultQuestValues = {
    quest: string;
    xpPoints: number;
    type: IDBrand;
    level: 'MIN' | 'MID' | 'MAX';
};

export const defaultQuestZodSchema = z.object({
    quest: z.string().min(3, 'Quest must be at least 3 characters long'),
    xpPoints: z.number(),
    type: z.string().min(3, 'Type must be selected'),
    level: z.string(),
});
