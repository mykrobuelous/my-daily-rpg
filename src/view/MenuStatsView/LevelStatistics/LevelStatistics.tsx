import { twMerge } from 'tailwind-merge';
import { LevelDetailsType } from '../../../hooks/useLevel';
import LevelDisplay from '../components/LevelDisplay';
import LevelDetails from './LevelDetails';
import MenuCard from '../components/MenuCard';

interface Props {
    className?: string;
    levelDetails: LevelDetailsType;
}

const LevelStatistics: React.FC<Props> = ({ className, levelDetails }) => {
    return (
        <MenuCard title="Level Statistics" className={twMerge('font-radio', className)}>
            <div className="flex h-full flex-col justify-between gap-2">
                <LevelDisplay levelDetails={levelDetails} className="w-60" />
                <LevelDetails levelDetails={levelDetails} />
            </div>
        </MenuCard>
    );
};

export default LevelStatistics;
