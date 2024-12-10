import { createContext } from 'react';
import { DayType } from '../../data/DayType';
import { IDBrand } from '../../utils/types/BrandType';

export interface MainContextProps {
    dayData: DayType[];
    selectedDayID: {
        state: DayType | undefined;
        setState: (id: IDBrand) => void;
    };
}

export const MainContext = createContext<MainContextProps | undefined>(undefined);
