import { twMerge } from 'tailwind-merge';
import { XPType } from '../../../../data/XPType';
import { CircleCheckBig, Trash2, TrendingUp } from 'lucide-react';
import LogoText from '../../../../components/LogoText/LogoText';
import { getLevelText } from '../../../../utils/function/getDifficultyText';

interface Props {
    className?: string;
    questItem: XPType;
}

const DailyQuestItem: React.FC<Props> = ({ className, questItem }) => {
    return (
        <div
            className={twMerge(
                'flex items-center',
                'group relative mb-2 rounded-xl border border-gray-700/50 bg-gray-800/50 p-4 backdrop-blur-sm',
                'hover:scale-[1.02] hover:bg-gray-700/50 hover:shadow-lg hover:shadow-gray-900/20',
                className
            )}
        >
            <div className="flex items-start justify-between w-full">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 w-80">
                        <CircleCheckBig className="mt-1 text-green-400" size={24} />
                        <p className="text-base font-semibold text-gray-100">
                            {questItem.questDetails.quest}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex items-center gap-3 text-xs text-gray-400">
                            <LogoText
                                text={getLevelText(questItem.questDetails.level)}
                                Logo={TrendingUp}
                                size="2xs"
                                className="gap-2"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex gap-3">
                    <div className="flex flex-col items-end gap-2">
                        <div
                            className={`flex w-[72px] items-center rounded-full bg-green-500/10 px-3 py-1 text-green-400`}
                        >
                            <span className="flex text-sm font-bold">
                                +{questItem.questDetails.points} XP
                            </span>
                        </div>
                    </div>
                    <button className="rounded-lg p-1.5 opacity-0 transition-all duration-200 group-hover:opacity-100">
                        <Trash2
                            size={18}
                            className="text-gray-400 transition-colors hover:text-red-500"
                        />
                    </button>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden rounded-b-xl">
                <div className="h-full w-[75%] bg-gradient-to-r from-green-500/50 to-green-300/50" />
            </div>
        </div>
    );
};

export default DailyQuestItem;
