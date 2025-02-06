import Info from '@/components/Info/Info';
import { LevelInfoType } from '@/utils/function/calculateLevel';
import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
    levelDetails: LevelInfoType;
}

const LevelDetails: React.FC<Props> = ({ className, levelDetails }) => {
    const {
        playerExpInCurLevel,
        playerExpToNextLevel,
        playerExpToTotalLevel,
        playerDaysToNextLevel,
    } = levelDetails;
    return (
        <div className={twMerge('flex flex-col justify-between text-gray-300', className)}>
            <Info label="Current XP" text={playerExpInCurLevel} colortwClass="text-yellow-400" />
            <Info
                label="XP to Next Level"
                text={playerExpToNextLevel}
                colortwClass="text-indigo-400"
            />
            <Info
                label="Total Level XP"
                text={playerExpToTotalLevel}
                colortwClass="text-purple-400"
            />
            <Info
                label="Days to Next Level"
                text={`${playerDaysToNextLevel} ${playerDaysToNextLevel === 1 ? 'day' : 'days'}`}
                colortwClass="text-orange-400"
            />
        </div>
    );
};

export default LevelDetails;
