import ChipPoints from '@/components/Chip/ChipPoints';
import { useModalContext } from '@/context/ModalProvider/useModalContext';
import useData from '@/hooks/useData';
import { QuestTemplateType } from '@/types/datatypes/quest.types';
import { Dice1, Dice2, Dice3, Trash2 } from 'lucide-react';
import { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
    item: QuestTemplateType;
    onDelete?: () => void;
}

const QuestTemplateItem: React.FC<Props> = ({ className, item, onDelete }) => {
    const { experienceDataState } = useData();
    const { showConfirmModal } = useModalContext();
    const colorMap = useMemo(
        () =>
            experienceDataState.data?.find(
                (experienceItem) => experienceItem.id === item.experienceID
            )?.color,
        [experienceDataState.data, item.experienceID]
    );
    return (
        <div
            className={twMerge(
                'group flex cursor-pointer rounded-lg border border-l-8 border-gray-700 bg-transparent p-3',
                colorMap?.border,
                className
            )}
        >
            <div className="flex w-full flex-col">
                <div className="mb-2">
                    <h2 className={twMerge('text-lg font-bold text-white', colorMap?.text)}>
                        {item.title}
                    </h2>
                    <p className="text-xs italic text-gray-300/60">{item.description}</p>
                </div>
                <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1">
                        <div className="flex gap-[0.3rem] text-gray-400">
                            <Dice1 size={16} />
                            <span className="font-medium">MIN:</span>
                        </div>
                        <ChipPoints content={`+${item.questDetails.min.points}`} />
                        <span className="text-gray-300">{item.questDetails.min.quest}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="flex gap-[0.3rem] text-gray-400">
                            <Dice2 size={16} />
                            <span className="font-medium">MID:</span>
                        </div>
                        <ChipPoints content={`+${item.questDetails.mid.points}`} />
                        <span className="text-gray-300">{item.questDetails.mid.quest}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="flex gap-[0.3rem] text-gray-400">
                            <Dice3 size={16} />
                            <span className="font-medium">MAX:</span>
                        </div>
                        <ChipPoints content={`+${item.questDetails.max.points}`} />
                        <span className="text-gray-300">{item.questDetails.max.quest}</span>
                    </div>
                </div>
            </div>
            <div className="flex items-start">
                <button className="rounded-lg p-1.5 opacity-0 transition-all duration-200 group-hover:opacity-100">
                    <Trash2
                        size={24}
                        className="text-gray-400 transition-colors hover:text-red-500"
                        onClick={(e) => {
                            e.stopPropagation();
                            if (onDelete)
                                showConfirmModal(
                                    onDelete,
                                    'Delete Quest Template',
                                    `Are you sure you want to delete ${item.title} Quest?`
                                );
                        }}
                    />
                </button>
            </div>
        </div>
    );
};

export default QuestTemplateItem;
