import { twMerge } from 'tailwind-merge';
import { ExperienceType } from '../../data/ExperienceType';
import LevelDisplay from './components/LevelDisplay';
import Info from '../../components/Info/Info';
import Circle from '../../components/Circle/Circle';
import { useMemo } from 'react';
import { getExperienceLogo } from '../../utils/function/getExperienceLogo';

interface Props {
    className?: string;
    expItem: ExperienceType | undefined;
}

const ExpMenuCard: React.FC<Props> = ({ className, expItem }) => {
    const ExpLogo = useMemo(() => {
        return getExperienceLogo(expItem?.id);
    }, [expItem]);

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
                    levelDetails={{
                        level: 10,
                        currentLevelXP: 20,
                        nextLevelXP: 30,
                        totalXPforLevel: 50,
                    }}
                    loadBarColortwClass={expItem?.color.background}
                />
            </div>
            <div>
                <Info
                    label="Current XP"
                    text={32}
                    colortwClass={expItem?.color.text || 'text-yellow-400'}
                    size="sm"
                />
                <Info label="XP to Next Level" text={32} colortwClass="text-indigo-400" size="sm" />
                <Info label="Total Level XP" text={32} colortwClass="text-purple-400" size="sm" />
                <Info
                    label="Days to Next Level"
                    text={`3 days*`}
                    colortwClass="text-orange-400"
                    size="sm"
                />
            </div>
            <div className="view-full flex items-center justify-between">
                <Circle
                    title="Total XP"
                    points={expItem?.totalPoints || 0}
                    size="xs"
                    borderColortwClass={expItem?.color.border}
                    labelLocation="bottom"
                    textColortwClass={expItem?.color.text}
                />
                <Circle
                    title="Daily Task"
                    points={expItem?.totalPoints || 0}
                    size="xs"
                    borderColortwClass={expItem?.color.border}
                    labelLocation="bottom"
                    textColortwClass={expItem?.color.text}
                />
                <Circle
                    title="Total Task"
                    points={expItem?.totalPoints || 0}
                    size="xs"
                    borderColortwClass={expItem?.color.border}
                    labelLocation="bottom"
                    textColortwClass={expItem?.color.text}
                />
            </div>
        </div>
    );
};

export default ExpMenuCard;
