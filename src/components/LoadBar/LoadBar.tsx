import { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
    totalPoints: number;
    currentPoints: number;
    colortwClass?: string;
}

const LoadBar: React.FC<Props> = ({
    className,
    totalPoints,
    currentPoints,
    colortwClass = 'bg-yellow-500',
}) => {
    const percentage = useMemo(
        () => (currentPoints / totalPoints) * 100,
        [currentPoints, totalPoints]
    );

    return (
        <div
            className={twMerge(
                'relative h-3 w-full overflow-hidden rounded-full bg-slate-950 backdrop-blur-sm',
                className
            )}
        >
            <div
                className={twMerge('h-full rounded-xl', colortwClass)}
                style={{ width: `${percentage}%` }}
            >
                <div className="bg-[radial-gradient(farthest-side_at_top,rgba(207, 194, 194, 0.15),transparent)] absolute inset-0 opacity-50 mix-blend-overlay" />
            </div>
        </div>
    );
};

export default LoadBar;
