import { twMerge } from 'tailwind-merge';
import Button from '../../../components/Button/Button';

interface Props {
    className?: string;
    onClose: () => void;
}

const ConfirmModal: React.FC<Props> = ({ className, onClose }) => {
    return (
        <div
            className={twMerge(
                'z-20 flex w-96 flex-col gap-2 rounded-lg bg-white p-6 text-black',
                className
            )}
            onClick={onClose}
        >
            <h2 className="text-2xl font-semibold text-gray-800">Confirm Modal</h2>
            <p className="text-gray-600">Are you sure you want to do this?</p>
            <div className="mt-4 flex w-full justify-end gap-3">
                <Button
                    onClick={onClose}
                    text="Cancel"
                    variant="ghost"
                    className="h-10 w-24 rounded-lg transition-colors hover:bg-gray-100"
                />
                <Button
                    onClick={onClose}
                    text="Confirm"
                    variant="blue"
                    className="h-10 w-24 rounded-lg shadow-sm transition-all hover:shadow-md"
                />
            </div>
        </div>
    );
};

export default ConfirmModal;
