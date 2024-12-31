import { FC, ReactNode, useState } from 'react';
import { ModalContext } from './ModalContext';
import Modal from '../../view/ModalView/Modal/Modal';
import NewDateModal from '../../view/ModalView/NewDateModal/NewDateModal';
import ConfirmModal from '../../view/ModalView/ConfirmModal/ConfirmModal';
import ReactDOM from 'react-dom';
import UpdateQuestModal from '../../view/ModalView/UpdateQuestModal/UpdateQuestModal';
import { IDBrand } from '../../utils/types/BrandType';
import { DefaultQuestValues } from '../../utils/types/FormTypes/DefaultQuestTypes';
import useData from '../../hooks/useData';

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [newDateModal, setNewDateModal] = useState<boolean>(false);
    const [confirmModalContent, setConfirmModalContent] = useState<ReactNode | null>(null);
    const [updateQuestModalContent, setUpdateQuestModalContent] = useState<ReactNode | null>(null);
    const { dayDataState } = useData();

    const showConfirmModal = (onConfirm: () => void, title?: string, message?: string) => {
        const content = (
            <ConfirmModal
                title={title}
                message={message}
                onConfirm={() => {
                    onConfirm();
                    setConfirmModalContent(null);
                }}
                onClose={() => setConfirmModalContent(null)}
            />
        );
        setConfirmModalContent(content);
    };

    const showUpdateQuestModal = (
        onConfirm: (questValues: DefaultQuestValues) => void,
        dayID: IDBrand,
        questID: IDBrand
    ) => {
        const newDayData = dayDataState.data?.find((dayItem) => dayItem.id === dayID);
        if (!newDayData) return;

        const questData = newDayData.QuestXP.find((questItem) => questItem.id === questID);
        if (!questData) return;

        const updateQuest: DefaultQuestValues = {
            quest: questData.questDetails.quest,
            xpPoints: questData.questDetails.points,
            type: questData.experienceID,
            level: questData.questDetails.level,
        };

        const content = (
            <UpdateQuestModal
                updateQuest={updateQuest}
                onConfirm={onConfirm}
                onClose={() => {
                    setUpdateQuestModalContent(null);
                }}
            />
        );
        setUpdateQuestModalContent(content);
    };

    return (
        <ModalContext.Provider
            value={{
                newDateModal: {
                    isOpen: newDateModal,
                    openModal: () => setNewDateModal(true),
                    closeModal: () => setNewDateModal(false),
                },
                showConfirmModal,
                showUpdateQuestModal,
            }}
        >
            {children}
            {newDateModal &&
                ReactDOM.createPortal(
                    <Modal onClose={() => setNewDateModal(false)}>
                        <NewDateModal onClose={() => setNewDateModal(false)} />
                    </Modal>,
                    document.body
                )}
            {confirmModalContent &&
                ReactDOM.createPortal(
                    <Modal onClose={() => setConfirmModalContent(null)}>
                        {confirmModalContent}
                    </Modal>,
                    document.body
                )}
            {updateQuestModalContent &&
                ReactDOM.createPortal(
                    <Modal onClose={() => setUpdateQuestModalContent(null)}>
                        {updateQuestModalContent}
                    </Modal>,
                    document.body
                )}
        </ModalContext.Provider>
    );
};
