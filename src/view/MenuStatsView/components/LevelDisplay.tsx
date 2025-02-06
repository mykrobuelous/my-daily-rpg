import { twMerge } from 'tailwind-merge';
import LoadBar from '../../../components/LoadBar/LoadBar';
import { LevelInfoType } from '../../../utils/function/calculateLevel';

interface Props {
    className?: string;
    levelDetails: LevelInfoType;
    loadBarColortwClass?: string;
}

const LevelDisplay: React.FC<Props> = ({ className, levelDetails, loadBarColortwClass }) => {
    const { playerLevel, playerPercentageProgress, playerExpToTotalLevel, playerExpInCurLevel } =
        levelDetails;
    return (
        <div className={twMerge('flex flex-row gap-3 pb-2', className)}>
            <p className="flex text-4xl leading-none">{playerLevel}</p>
            <div className="flex w-full flex-col gap-1">
                <div className="flex items-center justify-between">
                    <p className="text-sm leading-none">Level</p>
                    <p className="text-xs">{`${Number(playerPercentageProgress).toFixed(1)}%`}</p>
                </div>
                <LoadBar
                    currentPoints={playerExpInCurLevel}
                    totalPoints={playerExpToTotalLevel}
                    {...(loadBarColortwClass && { colortwClass: loadBarColortwClass })}
                />
            </div>
        </div>
    );
};

export default LevelDisplay;
