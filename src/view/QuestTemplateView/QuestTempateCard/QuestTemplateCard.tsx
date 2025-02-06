import { twMerge } from 'tailwind-merge';
import MenuCard from '../../MenuStatsView/components/MenuCard';
import useData from '@/hooks/useData';
import Input from '@/components/Input/Input';
import { Circle, CircleCheckBig, CirclePlus, Search } from 'lucide-react';
import useSearchQuestTemplates from '../hooks/useSearchQuestTemplates';
import QuestTemplateFilter from './QuestTemplateFilter';
import QuestTemplateList from './QuestTemplateList';
import useTestQuestTemplates from '../hooks/useTestQuestTemplates';
import { useModalContext } from '@/context/ModalProvider/useModalContext';

interface Props {
    className?: string;
}

const QuestTemplateCard: React.FC<Props> = ({ className }) => {
    const { questTemplateDataState } = useData();
    const { showNewQuestModal } = useModalContext();

    const { questTemplateData, questFunctions } = useTestQuestTemplates(
        questTemplateDataState.data
    );

    const { searchText, filteredData, questFilter, isExp, isGrouped } =
        useSearchQuestTemplates(questTemplateData);

    return (
        <MenuCard title="Quest Templates" className={twMerge('', className)}>
            <div className="flex h-full flex-col gap-4 overflow-hidden">
                <div className="flex gap-4">
                    <Input
                        icon={Search}
                        className="w-full"
                        value={searchText.get}
                        onChange={(e) => searchText.set(e.target.value)}
                    />
                    <div className="flex flex-col items-center gap-1">
                        <p className="text-xs font-semibold uppercase">Group</p>
                        <div>
                            {isGrouped.get ? (
                                <CircleCheckBig
                                    size={20}
                                    strokeWidth={2}
                                    onClick={() => isGrouped.set(!isGrouped.get)}
                                    className="cursor-pointer hover:text-green-400"
                                />
                            ) : (
                                <Circle
                                    size={20}
                                    strokeWidth={2}
                                    onClick={() => isGrouped.set(!isGrouped.get)}
                                    className="cursor-pointer hover:text-green-400"
                                />
                            )}
                        </div>
                    </div>
                    <QuestTemplateFilter isExp={isExp} questFilter={questFilter} />
                    <div className="flex w-32 flex-col items-center justify-center gap-1">
                        <p className="text-xs font-semibold uppercase">Add Quest</p>
                        <CirclePlus
                            size={22}
                            className="cursor-pointer hover:text-gray-400"
                            onClick={() => {
                                showNewQuestModal();
                            }}
                        />
                    </div>
                </div>
                <QuestTemplateList data={filteredData} testFunctions={questFunctions} />
            </div>
        </MenuCard>
    );
};

export default QuestTemplateCard;
