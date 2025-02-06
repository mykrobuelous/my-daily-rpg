import { IDBrand } from '@/types/brand.types';
import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
    questId?: IDBrand;
}

const NewQuestTemplateModal: React.FC<Props> = ({ className, questId }) => {
    return (
        <div
            className={twMerge(
                'z-20 flex h-96 w-96 flex-col gap-5 rounded-2xl bg-gray-900 p-5 shadow-2xl',
                className
            )}
        >
            <div className="flex items-center justify-between border-b border-gray-700 pb-3">
                <h2 className="text-2xl font-bold text-white">{`${questId ? 'Update' : 'New'} Quest Template`}</h2>
            </div>
        </div>
    );
};

export default NewQuestTemplateModal;
