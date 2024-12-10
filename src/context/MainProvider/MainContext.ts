import { createContext } from 'react';
import { DayType } from '../../data/DayType';
import { IDBrand } from '../../utils/types/BrandType';
import { ExperienceType } from '../../data/ExperienceType';

export interface MainContextProps {
    dayData: DayType[];
    experienceData: ExperienceType[];
    selectedDayID: {
        state: DayType | undefined;
        setState: (id: IDBrand) => void;
    };
}

export const MainContext = createContext<MainContextProps | undefined>(undefined);
