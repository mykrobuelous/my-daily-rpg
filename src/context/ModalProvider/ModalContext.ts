import { createContext } from 'react';

export type ModalType = {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
};

export interface ModalContextProps {
    newDateModal: ModalType;
    showConfirmModal: (onConfirm: () => void, title?: string, message?: string) => void;
    showUpdateQuestModal: (onConfirm: () => void) => void;
}

export const ModalContext = createContext<ModalContextProps | undefined>(undefined);
