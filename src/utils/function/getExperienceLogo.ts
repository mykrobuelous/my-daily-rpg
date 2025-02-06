import { IDBrand } from '@/types/brand.types';
import { BookOpenText, Brain, Cog, Cross, Swords } from 'lucide-react';

export const getExperienceLogo = (expID?: IDBrand) => {
    switch (expID) {
        case 'ABC01':
            return Swords;
        case 'ABC02':
            return BookOpenText;
        case 'ABC03':
            return Brain;
        case 'ABC04':
            return Cross;
        default:
            return Cog;
    }
};
