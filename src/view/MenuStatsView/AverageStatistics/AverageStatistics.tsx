import useLevel from '@/hooks/useLevel';
import { twMerge } from 'tailwind-merge';
import MenuCard from '../components/MenuCard';
import Circle from '@/components/Circle/Circle';
import AverageExpStats from './AverageExpStats';
import Info from '@/components/Info/Info';

interface Props {
    className?: string;
}

const AverageStatistics: React.FC<Props> = ({ className }) => {
    const {
        totalAverages: { taskPerDay, pointsPerDay },
    } = useLevel();

    return (
        <MenuCard title="Average Statistics" className={twMerge('font-radio elevate', className)}>
            <div className="flex h-full flex-col justify-between">
                <div className="flex gap-6">
                    <Circle title="XP / Day" points={pointsPerDay} />
                    <AverageExpStats />
                </div>
                <Info
                    label="Average Quest / Day"
                    text={`${Math.floor(taskPerDay)} ${Math.floor(taskPerDay) === 1 ? 'task' : 'tasks'}`}
                    colortwClass="text-blue-400"
                />
            </div>
        </MenuCard>
    );
};

export default AverageStatistics;
