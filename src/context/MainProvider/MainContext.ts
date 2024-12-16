import { createContext } from 'react';
import { DayType } from '../../data/DayType';
import { IDBrand } from '../../utils/types/BrandType';
import { ExperienceType } from '../../data/ExperienceType';
import { CallAPIType } from '../../api/mockAPI/mockAPITypes';

export interface MainContextProps {
    dayData: DayType[];
    experienceData: ExperienceType[];
    experienceDataMap: Record<string, ExperienceType>;
    selectedDayID: {
        state: DayType | undefined;
        setState: (id: IDBrand) => void;
    };
    callAPI: CallAPIType;
}

export const MainContext = createContext<MainContextProps | undefined>(undefined);
