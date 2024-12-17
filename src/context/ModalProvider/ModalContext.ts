import { createContext } from 'react';

export type ModalType = {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
};

export interface ModalContextProps {
    newDateModal: ModalType;
    confirmModal: ModalType;
}

export const ModalContext = createContext<ModalContextProps | undefined>(undefined);
