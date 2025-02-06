import { twMerge } from 'tailwind-merge';
import AddXPPoints from './AddXPPoints';
import DailyQuestList from './components/DailyQuestList/DailyQuestList';
import AddSetXP from './AddSetXP';
import { useState } from 'react';
import { BadgePlus, ListCheck } from 'lucide-react';

interface Props {
    className?: string;
}

type QuickTabType = 'quest' | 'sets';

const DailyRPGView: React.FC<Props> = ({ className }) => {
    const [quickTab, setQuickTab] = useState<QuickTabType>('quest');
    return (
        <div
            className={twMerge(
                'flex h-full flex-col gap-2 overflow-hidden px-8 pb-5 pt-4',
                className
            )}
        >
            <div className="flex gap-4 rounded-lg border border-gray-200/30 p-4">
                <div className="flex flex-col gap-4">
                    <BadgePlus
                        onClick={() => setQuickTab('quest')}
                        className={`h-6 w-6 cursor-pointer transition-all duration-200 ${
                            quickTab === 'quest'
                                ? 'scale-110 text-green-500'
                                : 'text-gray-400 hover:text-gray-200'
                        }`}
                    />
                    <ListCheck
                        onClick={() => setQuickTab('sets')}
                        className={`h-6 w-6 cursor-pointer transition-all duration-200 ${
                            quickTab === 'sets'
                                ? 'scale-110 text-green-500'
                                : 'text-gray-400 hover:text-gray-200'
                        }`}
                    />
                </div>
                <div className="w-full">
                    {quickTab === 'quest' ? (
                        <AddXPPoints className="min-h-32 w-full" />
                    ) : (
                        <AddSetXP className="min-h-32 w-full" />
                    )}
                </div>
            </div>

            <DailyQuestList className="z-0 mt-5 h-full overflow-y-scroll" />
        </div>
    );
};

export default DailyRPGView;
