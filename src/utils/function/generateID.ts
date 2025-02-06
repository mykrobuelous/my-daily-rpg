import { IDBrand } from '@/types/brand.types';
import { v4 as uuidv4 } from 'uuid';
export const generateID = () => {
    return uuidv4() as IDBrand;
};
