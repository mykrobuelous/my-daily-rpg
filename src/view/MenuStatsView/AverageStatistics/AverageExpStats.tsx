import useLevel from '@/hooks/useLevel';
import { fixNumber } from '@/utils/function/fixNumber';
import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
}

const AverageExpStats: React.FC<Props> = ({ className }) => {
    const { statsExpData, totalDays } = useLevel();
    return (
        <div className={twMerge('w-full', className)}>
            {statsExpData?.map((expItem) => {
                return (
                    <div className="flex items-center justify-between gap-8" key={expItem.id}>
                        <p
                            className={twMerge('leading-1 text-sm', expItem.color.text)}
                        >{`${expItem.ABV}`}</p>
                        <div className="w-full text-center">
                            <div className="space-x-1">
                                <span className={twMerge('text-xl', expItem.color.text)}>
                                    {fixNumber(expItem.stats.points / totalDays)}
                                </span>
                                <span className="text-[0.5rem] text-white/60">XP</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AverageExpStats;
