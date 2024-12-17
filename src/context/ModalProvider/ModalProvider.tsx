import { FC, ReactNode, useState } from 'react';
import { ModalContext } from './ModalContext';
import Modal from '../../view/ModalView/Modal/Modal';
import NewDateModal from '../../view/ModalView/NewDateModal/NewDateModal';
import ConfirmModal from '../../view/ModalView/ConfirmModal/ConfirmModal';
import ReactDOM from 'react-dom';

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [newDateModal, setNewDateModal] = useState<boolean>(false);
    const [confirmModalContent, setConfirmModalContent] = useState<ReactNode | null>(null);

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

    return (
        <ModalContext.Provider
            value={{
                newDateModal: {
                    isOpen: newDateModal,
                    openModal: () => setNewDateModal(true),
                    closeModal: () => setNewDateModal(false),
                },
                showConfirmModal,
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
        </ModalContext.Provider>
    );
};
