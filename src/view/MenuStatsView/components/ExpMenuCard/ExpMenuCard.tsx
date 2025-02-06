import { twMerge } from 'tailwind-merge';
import { useMemo } from 'react';
import ExpMenuDetails from './ExpMenuDetails';
import ExpMenuTotal from './ExpMenuTotal';
import { StatsExpDataType } from '@/hooks/useLevel';
import { getExperienceLogo } from '@/utils/function/getExperienceLogo';
import { calculateLevel } from '@/utils/function/calculateLevel';
import LevelDisplay from '../LevelDisplay';

interface Props {
    className?: string;
    expItem: StatsExpDataType;
}

const ExpMenuCard: React.FC<Props> = ({ className, expItem }) => {
    const ExpLogo = useMemo(() => {
        return getExperienceLogo(expItem?.id);
    }, [expItem]);

    const levelDetails = calculateLevel(expItem.stats.points || 0, 1);

    return (
        <div
            className={twMerge(
                'flex flex-col gap-3',
                'view-full card-glossy rounded-xl p-4',
                'border-2 shadow-inner',
                expItem?.color.border,
                className
            )}
        >
            <div className={twMerge('flex items-center gap-2', expItem?.color.text)}>
                <ExpLogo />
                <p
                    className={twMerge(
                        'text-xl font-bold tracking-wide text-gray-100',
                        expItem?.color.text
                    )}
                >
                    {expItem?.experience}
                </p>
            </div>
            <div>
                <LevelDisplay
                    levelDetails={levelDetails}
                    loadBarColortwClass={expItem?.color.background}
                />
            </div>

            <div>
                <ExpMenuDetails expItem={expItem} />
            </div>
            <div>
                <ExpMenuTotal expItem={expItem} />
            </div>
        </div>
    );
};

export default ExpMenuCard;
