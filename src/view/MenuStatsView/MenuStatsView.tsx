import { twMerge } from 'tailwind-merge';
import LevelStatistics from './LevelStatistics/LevelStatistics';
import AverageStatistics from './AverageStatistics/AverageStatistics';
import TotalStatistics from './TotalStatistics/TotalStatistics';
import ExpMenuCard from './components/ExpMenuCard/ExpMenuCard';
import useLevel from '@/hooks/useLevel';

interface Props {
    className?: string;
}

const MenuStatsView: React.FC<Props> = ({ className }) => {
    const { statsExpData } = useLevel();

    return (
        <div className={twMerge('flex flex-col gap-4 p-6', className)}>
            <div className="flex h-96 w-full gap-4">
                <LevelStatistics />
                <AverageStatistics />
                <TotalStatistics />
            </div>
            <div className="view-full flex gap-6">
                {statsExpData?.map((expItemStats) => {
                    return (
                        <ExpMenuCard
                            key={expItemStats.id}
                            expItem={expItemStats}
                            className="elevate"
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default MenuStatsView;
