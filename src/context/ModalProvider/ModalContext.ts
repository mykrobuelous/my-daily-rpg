import { IDBrand } from '@/types/brand.types';
import { QuestFormValuesType } from '@/types/formtypes/questForm.types';
import { createContext } from 'react';

export type ModalType = {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
};

export interface ModalContextProps {
    newDateModal: ModalType;
    showConfirmModal: (onConfirm: () => void, title?: string, message?: string) => void;
    showUpdateQuestModal: (
        onConfirm: (questValues: QuestFormValuesType) => void,
        dayID: IDBrand,
        questID: IDBrand
    ) => void;
    showNewQuestModal: () => void;
}

export const ModalContext = createContext<ModalContextProps | undefined>(undefined);
