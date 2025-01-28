import { twMerge } from 'tailwind-merge';
import { LevelDetailsType } from '../../../hooks/useLevel';
import Info from '../../../components/Info/Info';

interface Props {
    className?: string;
    levelDetails: LevelDetailsType;
}

const LevelDetails: React.FC<Props> = ({ className, levelDetails }) => {
    return (
        <div className={twMerge('flex flex-col justify-between text-gray-300', className)}>
            <Info
                label="Current XP"
                text={levelDetails.currentLevelXP}
                colortwClass="text-yellow-400"
            />
            <Info
                label="XP to Next Level"
                text={levelDetails.nextLevelXP}
                colortwClass="text-indigo-400"
            />
            <Info
                label="Level XP"
                text={levelDetails.totalXPforLevel}
                colortwClass="text-purple-400"
            />
            <Info label="Days to Next Level" text="5 days*" colortwClass="text-orange-400" />
        </div>
    );
};

export default LevelDetails;
