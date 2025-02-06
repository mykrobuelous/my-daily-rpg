import { QuestTemplateType } from '@/types/datatypes/quest.types';
import { twMerge } from 'tailwind-merge';
import QuestTemplateItem from '../QuestTemplateItem/QuestTemplateItem';
import { IDBrand } from '@/types/brand.types';

interface Props {
    className?: string;
    data: QuestTemplateType[];
    testFunctions: {
        add: () => void;
        delete: (id: IDBrand) => void;
    };
}

const QuestTemplateList: React.FC<Props> = ({ className, data, testFunctions }) => {
    return (
        <div className={twMerge('flex h-full flex-col gap-4 overflow-y-scroll', className)}>
            {data.map((tempItem) => {
                return (
                    <QuestTemplateItem
                        key={tempItem.id}
                        item={tempItem}
                        onDelete={() => {
                            testFunctions.delete(tempItem.id);
                        }}
                    />
                );
            })}
        </div>
    );
};

export default QuestTemplateList;
