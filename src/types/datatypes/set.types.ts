import { IDBrand } from '../brand.types';
import { XPLevelDataType } from './xp.types';

export type SetType = {
    id: IDBrand;
    name: string;
    setItems: SetItemType[];
};

export type SetItemType = {
    id: IDBrand;
    questID: IDBrand;
    level: XPLevelDataType;
};
