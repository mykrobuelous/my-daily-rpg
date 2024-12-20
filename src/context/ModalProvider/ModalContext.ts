import { createContext } from 'react';
import { IDBrand } from '../../utils/types/BrandType';
import { DefaultQuestValues } from '../../utils/types/FormTypes/DefaultQuestTypes';

export type ModalType = {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
};

export interface ModalContextProps {
    newDateModal: ModalType;
    showConfirmModal: (onConfirm: () => void, title?: string, message?: string) => void;
    showUpdateQuestModal: (
        onConfirm: (questValues: DefaultQuestValues) => void,
        dayID: IDBrand,
        questID: IDBrand
    ) => void;
}

export const ModalContext = createContext<ModalContextProps | undefined>(undefined);
