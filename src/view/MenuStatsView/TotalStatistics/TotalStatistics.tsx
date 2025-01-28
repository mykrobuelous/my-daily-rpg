import { twMerge } from 'tailwind-merge';
import MenuCard from '../components/MenuCard';
import Circle from '../../../components/Circle/Circle';

interface Props {
    className?: string;
    totalPoints?: number;
}

const TotalStatistics: React.FC<Props> = ({ className, totalPoints = 0 }) => {
    return (
        <MenuCard title="Total Experience Points" className={twMerge('', className)}>
            <div className="flex h-full flex-col items-center justify-between">
                <div className="flex h-full gap-3">
                    <Circle title="Total Exp" points={totalPoints} size="sm" />
                    <Circle title="Total Days" points={300} size="sm" />
                    <Circle title="Total Task" points={20} size="sm" />
                </div>
                <div className="flex-center text-md">
                    <p className="font-semibold text-yellow-500">You are doing great!!</p>
                </div>
            </div>
        </MenuCard>
    );
};

export default TotalStatistics;
