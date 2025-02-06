import useData from '@/hooks/useData';
import { IDBrand } from '@/types/brand.types';
import { X } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
    isExp: boolean;
    questFilter: {
        get: IDBrand | 'ALL';
        set: React.Dispatch<React.SetStateAction<IDBrand | 'ALL'>>;
    };
}

const QuestTemplateFilter: React.FC<Props> = ({ className, isExp, questFilter }) => {
    const { experienceDataState } = useData();
    return (
        <div className={twMerge('flex flex-col gap-1', className)}>
            <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase">Filter</p>
                {isExp && (
                    <X
                        size={16}
                        className="cursor-pointer"
                        onClick={() => questFilter.set('ALL')}
                    />
                )}
            </div>
            <div className="flex gap-2">
                {experienceDataState.data?.map((expItem) => {
                    const selectedExpFilter = expItem.id === questFilter.get;
                    return (
                        <div
                            className={twMerge(
                                'relative h-5 w-5 cursor-pointer rounded-full border-2',
                                expItem.color.border,
                                selectedExpFilter ? expItem.color.background : ''
                            )}
                            key={expItem.id}
                            onClick={() => questFilter.set(expItem.id)}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
};

export default QuestTemplateFilter;
