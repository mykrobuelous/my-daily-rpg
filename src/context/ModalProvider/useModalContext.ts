import { useContext } from 'react';
import { ModalContext, ModalContextProps } from './ModalContext';

export const useModalContext = (): ModalContextProps => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModalContext must be used within a ModalProvider');
    }
    return context;
};
