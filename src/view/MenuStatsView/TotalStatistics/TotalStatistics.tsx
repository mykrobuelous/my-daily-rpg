import useLevel from '@/hooks/useLevel';
import { twMerge } from 'tailwind-merge';
import MenuCard from '../components/MenuCard';
import Circle from '@/components/Circle/Circle';

interface Props {
    className?: string;
}

const TotalStatistics: React.FC<Props> = ({ className }) => {
    const { totalPoints, totalDays, totalTasks } = useLevel();
    return (
        <MenuCard
            title="Total Experience Points"
            className={twMerge('font-radio elevate', className)}
        >
            <div className="flex h-full flex-col items-center justify-evenly">
                <div className="flex w-full justify-between">
                    <Circle title="Total XP" points={totalPoints} size="sm" />
                    <Circle title="Total Days" points={totalDays} size="sm" />
                    <Circle title="Total Quests" points={totalTasks} size="sm" />
                </div>
                <div className="flex-center text-md">
                    <p className="font-semibold text-yellow-500">You are doing great!!</p>
                </div>
            </div>
        </MenuCard>
    );
};

export default TotalStatistics;
