import { FC, ReactNode, useState } from 'react';
import useData from '../../hooks/useData';
import { MainContext } from './MainContext';
import { IDBrand } from '../../utils/types/BrandType';

export const MainProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const { dayData, experienceData, experienceDataMap, callAPI, levelData } = useData();
    const [selectedDayID, setSelectedDayID] = useState<IDBrand>();

    const selectedDay = dayData.find((dayItem) => dayItem.id === selectedDayID);

    const routeHome = () => {
        setSelectedDayID(undefined);
    };

    return (
        <MainContext.Provider
            value={{
                dayData,
                experienceData,
                experienceDataMap,
                selectedDayID: { state: selectedDay, setState: setSelectedDayID },
                route: { routeHome },
                callAPI,
                levelData,
            }}
        >
            {children}
        </MainContext.Provider>
    );
};
