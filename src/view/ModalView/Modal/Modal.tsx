import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
    children?: ReactNode;
    onClose: () => void;
}

const Modal: React.FC<Props> = ({ className, children, onClose }) => {
    return (
        <div className={twMerge('', className)}>
            <div className="view-screen flex-center absolute z-10">
                <div
                    className="view-screen absolute bg-gray-800 opacity-70"
                    onClick={onClose}
                ></div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
