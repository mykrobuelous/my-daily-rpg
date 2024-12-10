import { v4 as uuidv4 } from 'uuid';
import { IDBrand } from '../types/BrandType';

export const generateID = () => {
    return uuidv4() as IDBrand;
};
