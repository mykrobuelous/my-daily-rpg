import { twMerge } from 'tailwind-merge';
import { XPType } from '../../../../data/XPType';
import { CircleCheckBig, Trash2, TrendingUp } from 'lucide-react';
import LogoText from '../../../../components/LogoText/LogoText';
import { getLevelText } from '../../../../utils/function/getDifficultyText';
import ChipPoints from '../../../../components/Chip/ChipPoints';
import useData from '../../../../hooks/useData';
import dayjs from 'dayjs';

interface Props {
    className?: string;
    questItem: XPType;
    onTrash: () => void;
    onClick?: () => void;
}

const DailyQuestItem: React.FC<Props> = ({ className, questItem, onTrash, onClick }) => {
    const { experienceDataState } = useData();

    const colorMap = experienceDataState.data?.find(
        (experienceItem) => experienceItem.id === questItem.experienceID
    )?.color || { text: '', gradient: '', xp: '' };

    return (
        <div
            className={twMerge(
                'flex items-center',
                'group relative mb-2 rounded-xl border border-gray-700/50 bg-gray-800/50 p-4 backdrop-blur-sm',
                'hover:scale-[1.02] hover:bg-gray-700/50 hover:shadow-lg hover:shadow-gray-900/20',
                'cursor-pointer',
                className
            )}
            onClick={onClick}
        >
            <div className="flex w-full items-start justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex w-80 items-center gap-2">
                        <CircleCheckBig className={twMerge('mt-1', colorMap.text)} size={32} />
                        <div>
                            <p className="text-base font-semibold text-gray-100">
                                {questItem.questDetails.quest}
                            </p>
                            <p className="text-xs text-gray-400">
                                {dayjs(questItem.datetimeCreated).format('h:mm A')}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex items-center gap-3 text-xs text-gray-400">
                            <LogoText
                                text={getLevelText(questItem.questDetails.level)}
                                Logo={TrendingUp}
                                size="2xs"
                                className="gap-2"
                                cursor={false}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex gap-3">
                    <ChipPoints
                        content={`+${questItem.questDetails.points}`}
                        color={colorMap.xp}
                        prefix="XP"
                    />
                    <button className="rounded-lg p-1.5 opacity-0 transition-all duration-200 group-hover:opacity-100">
                        <Trash2
                            size={18}
                            className="text-gray-400 transition-colors hover:text-red-500"
                            onClick={(e) => {
                                e.stopPropagation();
                                onTrash();
                            }}
                        />
                    </button>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 h-1 w-full overflow-hidden rounded-b-xl">
                <div className={twMerge('h-full w-[75%]', colorMap.gradient)} />
            </div>
        </div>
    );
};

export default DailyQuestItem;
