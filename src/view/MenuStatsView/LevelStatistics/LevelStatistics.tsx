import useLevel from '@/hooks/useLevel';
import { twMerge } from 'tailwind-merge';
import MenuCard from '../components/MenuCard';
import LevelDisplay from '../components/LevelDisplay';
import LevelDetails from './LevelDetails';

interface Props {
    className?: string;
}

const LevelStatistics: React.FC<Props> = ({ className }) => {
    const { overAllLevel: levelDetails } = useLevel();

    return (
        <MenuCard title="Overall Level" className={twMerge('font-radio elevate', className)}>
            <div className="flex h-full flex-col justify-between gap-2">
                <LevelDisplay levelDetails={levelDetails} className="w-60" />
                <LevelDetails levelDetails={levelDetails} />
            </div>
        </MenuCard>
    );
};

export default LevelStatistics;
