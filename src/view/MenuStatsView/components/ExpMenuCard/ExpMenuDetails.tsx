import Info from '@/components/Info/Info';
import useLevel, { StatsExpDataType } from '@/hooks/useLevel';
import { calculateLevel } from '@/utils/function/calculateLevel';
import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
    expItem: StatsExpDataType;
}

const ExpMenuDetails: React.FC<Props> = ({ className, expItem }) => {
    const { totalDays } = useLevel();
    const {
        playerExpInCurLevel,
        playerExpToNextLevel,
        playerExpToTotalLevel,
        playerDaysToNextLevel,
    } = calculateLevel(expItem.stats.points, expItem.stats.points / totalDays);

    return (
        <div className={twMerge('', className)}>
            <Info
                label="Current XP"
                text={playerExpInCurLevel}
                colortwClass={expItem?.color.text || 'text-yellow-400'}
                size="sm"
            />
            <Info
                label="XP to Next Level"
                text={playerExpToNextLevel}
                colortwClass="text-indigo-400"
                size="sm"
            />
            <Info
                label="Total Level XP"
                text={playerExpToTotalLevel}
                colortwClass="text-purple-400"
                size="sm"
            />
            <Info
                label="Days to Next Level"
                text={`${playerDaysToNextLevel} ${playerDaysToNextLevel === 1 ? 'day' : 'days'}`}
                colortwClass="text-orange-400"
                size="sm"
            />
        </div>
    );
};

export default ExpMenuDetails;
