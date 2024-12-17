import { FC, ReactNode, useState } from 'react';
import { ModalContext } from './ModalContext';
import Modal from '../../view/ModalView/Modal/Modal';
import NewDateModal from '../../view/ModalView/NewDateModal/NewDateModal';
import ConfirmModal from '../../view/ModalView/ConfirmModal/ConfirmModal';

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [newDateModal, setNewDateModal] = useState<boolean>(false);
    const [confirmModal, setConfirmModal] = useState<boolean>(false);
    return (
        <ModalContext.Provider
            value={{
                newDateModal: {
                    isOpen: newDateModal,
                    openModal: () => setNewDateModal(true),
                    closeModal: () => setNewDateModal(false),
                },
                confirmModal: {
                    isOpen: confirmModal,
                    openModal: () => setConfirmModal(true),
                    closeModal: () => setConfirmModal(false),
                },
            }}
        >
            <div className="absolute">
                {newDateModal && (
                    <Modal onClose={() => setNewDateModal(false)}>
                        <NewDateModal onClose={() => setNewDateModal(false)} />
                    </Modal>
                )}
                {confirmModal && (
                    <Modal onClose={() => setConfirmModal(false)}>
                        <ConfirmModal onClose={() => setConfirmModal(false)} />
                    </Modal>
                )}
                <div>{children}</div>
            </div>
        </ModalContext.Provider>
    );
};
