import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
    children?: ReactNode;
    onClose: () => void;
}

const Modal: React.FC<Props> = ({ className, children, onClose }) => {
    return (
        <div className={twMerge('view-screen flex-center fixed left-0 top-0', className)}>
            <div className="z-10">{children}</div>
            <div className="view-screen absolute bg-gray-800 opacity-70" onClick={onClose}></div>
        </div>
    );
};

export default Modal;
