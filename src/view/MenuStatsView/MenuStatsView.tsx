import { twMerge } from 'tailwind-merge';
import useLevel from '../../hooks/useLevel';
import LevelStatistics from './LevelStatistics/LevelStatistics';
import AverageStatistics from './AverageStatistics/AverageStatistics';
import TotalStatistics from './TotalStatistics/TotalStatistics';
import ExpMenuCard from './ExpMenuCard';

interface Props {
    className?: string;
}

const MenuStatsView: React.FC<Props> = ({ className }) => {
    const { experienceData, levelDetails } = useLevel();

    return (
        <div className={twMerge('flex flex-col gap-4 p-10', className)}>
            <div className="flex h-96 w-full gap-4">
                <LevelStatistics levelDetails={levelDetails} />
                <AverageStatistics experienceData={experienceData} />
                <TotalStatistics />
            </div>
            <div className="view-full flex gap-6">
                {experienceData?.map((expItem) => {
                    return <ExpMenuCard key={expItem.id} expItem={expItem}></ExpMenuCard>;
                })}
            </div>
        </div>
    );
};

export default MenuStatsView;
