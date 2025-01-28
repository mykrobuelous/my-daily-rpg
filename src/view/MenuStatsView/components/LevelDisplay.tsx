import { twMerge } from 'tailwind-merge';
import { LevelDetailsType } from '../../../hooks/useLevel';
import LoadBar from '../../../components/LoadBar/LoadBar';

interface Props {
    className?: string;
    levelDetails: LevelDetailsType;
    loadBarColortwClass?: string;
}

const LevelDisplay: React.FC<Props> = ({ className, levelDetails, loadBarColortwClass }) => {
    const percentage = Number(
        ((levelDetails.currentLevelXP / levelDetails.totalXPforLevel) * 100).toFixed(1)
    );

    return (
        <div className={twMerge('flex flex-row gap-3 pb-2', className)}>
            <p className="flex text-4xl leading-none">{levelDetails.level}</p>
            <div className="flex w-full flex-col gap-1">
                <div className="flex items-center justify-between">
                    <p className="text-sm leading-none">Level</p>
                    <p className="text-xs">{`${percentage}%`}</p>
                </div>
                <LoadBar
                    currentPoints={levelDetails.currentLevelXP}
                    totalPoints={levelDetails.totalXPforLevel}
                    {...(loadBarColortwClass && { colortwClass: loadBarColortwClass })}
                />
            </div>
        </div>
    );
};

export default LevelDisplay;
