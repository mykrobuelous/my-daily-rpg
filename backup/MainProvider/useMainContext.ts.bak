import { useContext } from 'react';
import { MainContext, MainContextProps } from './MainContext';

export const useMainContext = (): MainContextProps => {
    const context = useContext(MainContext);
    if (!context) {
        throw new Error('useMainContext must be used within a MainProvider');
    }
    return context;
};
