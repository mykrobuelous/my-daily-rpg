import React, { ReactNode, useState } from 'react';
import useData from '../../hooks/useData';
import { MainContext } from './MainContext';
import { IDBrand } from '../../utils/types/BrandType';

export const MainProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { dayData, experienceData } = useData();
    const [selectedDayID, setSelectedDayID] = useState<IDBrand>();

    const selectedDay = dayData.find((dayItem) => dayItem.id === selectedDayID);

    return (
        <MainContext.Provider
            value={{
                dayData,
                experienceData,
                selectedDayID: { state: selectedDay, setState: setSelectedDayID },
            }}
        >
            {children}
        </MainContext.Provider>
    );
};
